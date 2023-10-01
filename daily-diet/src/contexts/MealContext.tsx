/* eslint-disable no-useless-catch */
import { storageMealGet, storageMealSave } from '@storage/storageMeal'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { MealByDayDTO } from '@dtos/MealByDayDTO'
import { MealDTO } from '@dtos/MealDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  mealById: MealDTO
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
  const [isLoadingMealStorageData, setIsLoadingMealStorageData] = useState(true)

  async function saveAndUpdateMeal(meals: MealByDayDTO[]) {
    try {
      await storageMealSave(meals)
      setMeal(meals)
    } catch (error) {
      console.log('saveAndUpdateMeal => ', error)
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
        return b.title.localeCompare(a.title)
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

  async function loadMealData() {
    try {
      setIsLoadingMealStorageData(true)
      const savedMealData = await storageMealGet()

      if (savedMealData) {
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
