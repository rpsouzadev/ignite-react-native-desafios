/* eslint-disable no-useless-catch */
import { storageMealGet, storageMealSave } from '@storage/storageMeal'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { MealByDayDTO } from '@dtos/MealByDayDTO'
import { MealDTO } from '@dtos/MealDTO'
import { MetricsDTO } from '@dtos/MetricsDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  mealById: MealDTO
  metrics: MetricsDTO
  meal: MealByDayDTO[]
  isLoadingMealStorageData: boolean
  getMealDataById: (mealId: string) => Promise<void>
  saveMeal: (mealData: MealDTO) => Promise<void>
  removeMeal: (mealId: string) => Promise<void>
  updateMealData: (mealData: MealDTO) => Promise<void>
}

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps,
)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meal, setMeal] = useState<MealByDayDTO[]>([])
  const [mealById, setMealById] = useState<MealDTO>({} as MealDTO)
  const [metrics, setMetrics] = useState<MetricsDTO>({} as MetricsDTO)
  const [isLoadingMealStorageData, setIsLoadingMealStorageData] = useState(true)

  async function saveAndUpdateMeal(meals: MealByDayDTO[]) {
    try {
      await storageMealSave(meals)
      await calculateMetrics()
      setMeal(meals)
    } catch (error) {
      throw error
    }
  }

  async function saveMeal(mealData: MealDTO) {
    try {
      const savedMeals = await storageMealGet()
      const newMeal = [...savedMeals]

      const findMealByDay = newMeal.find((meal) => meal.title === mealData.date)

      if (findMealByDay) {
        findMealByDay.data.push(mealData)

        findMealByDay.data.sort((a, b) => {
          return b.time.localeCompare(a.time)
        })
      } else {
        const mealByDay = {
          title: mealData.date,
          data: [mealData],
        }
        newMeal.push(mealByDay)
      }

      newMeal.sort((a, b) => {
        const dateA = new Date(a.title.split('/').reverse().join('-'))
        const dateB = new Date(b.title.split('/').reverse().join('-'))
        return dateB.getTime() - dateA.getTime()
      })

      await saveAndUpdateMeal(newMeal)
    } catch (error) {
      throw error
    }
  }

  async function removeMeal(mealId: string) {
    try {
      const savedMealData = await storageMealGet()
      const mealFiltered = savedMealData.map((meal) => {
        meal.data = meal.data.filter((data) => data.id !== mealId)
        return meal
      })

      const newMeals = mealFiltered.filter((meal) => meal.data.length > 0)

      saveAndUpdateMeal(newMeals)
    } catch (error) {
      throw error
    }
  }

  async function getMealDataById(mealId: string) {
    try {
      const savedMeals = await storageMealGet()

      const foundMeal = savedMeals
        .find((meal) => meal.data.some((data) => data.id === mealId))
        ?.data.find((data) => data.id === mealId)

      if (foundMeal) {
        setMealById(foundMeal)
      }
    } catch (error) {
      throw error
    }
  }

  async function updateMealData(updateData: MealDTO) {
    try {
      const savedMeals = await storageMealGet()
      const newMealUpdate = [...savedMeals]

      const mealUpdate = newMealUpdate
        .find((meal) => meal.data.some((data) => data.id === updateData.id))
        ?.data.find((data) => data.id === updateData.id)

      if (mealUpdate && mealUpdate.date === updateData.date) {
        mealUpdate.name = updateData.name
        mealUpdate.time = updateData.time
        mealUpdate.description = updateData.description
        mealUpdate.isWithinDiet = updateData.isWithinDiet

        await saveAndUpdateMeal(newMealUpdate)
        await getMealDataById(mealUpdate.id)
        return
      }

      if (mealUpdate && mealUpdate.date !== updateData.date) {
        const newMeal: MealDTO = {
          name: updateData.name,
          description: updateData.description,
          date: updateData.date,
          time: updateData.time,
          isWithinDiet: updateData.isWithinDiet,
          id: Date.now().toString(),
        }
        await saveMeal(newMeal)
        await getMealDataById(newMeal.id)
        await removeMeal(mealUpdate.id)
      }
    } catch (error) {
      throw error
    }
  }

  async function calculateMetrics() {
    try {
      const savedMeals = await storageMealGet()
      const total = savedMeals.reduce(
        (acc, mealByDay) => acc + mealByDay.data.length,
        0,
      )

      const totalWithinDiet = savedMeals.reduce((acc, mealByDay) => {
        const mealsWithinDiet = mealByDay.data.filter(
          (data) => data.isWithinDiet === true,
        )
        return acc + mealsWithinDiet.length
      }, 0)

      const totalOutDiet = savedMeals.reduce((acc, mealByDay) => {
        const mealsWithinDiet = mealByDay.data.filter(
          (data) => data.isWithinDiet === false,
        )
        return acc + mealsWithinDiet.length
      }, 0)

      const findPercentage = (totalWithinDiet * 100) / total
      const percentage = parseFloat(findPercentage.toFixed(2))

      let status = true
      if (percentage > 50) {
        status = true
      } else {
        status = false
      }

      const result: MetricsDTO = {
        total,
        status,
        percentage,
        totalOutDiet,
        totalWithinDiet,
        offensiveCount: 20,
      }

      setMetrics(result)
    } catch (error) {
      throw error
    }
  }

  async function loadMealData() {
    try {
      setIsLoadingMealStorageData(true)
      const savedMealData = await storageMealGet()

      if (savedMealData) {
        await calculateMetrics()
        setMeal(savedMealData)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingMealStorageData(false)
    }
  }

  useEffect(() => {
    loadMealData()
  }, [])

  return (
    <MealContext.Provider
      value={{
        meal,
        metrics,
        mealById,
        saveMeal,
        removeMeal,
        updateMealData,
        getMealDataById,
        isLoadingMealStorageData,
      }}
    >
      {children}
    </MealContext.Provider>
  )
}
