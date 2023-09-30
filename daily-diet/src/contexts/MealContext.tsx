/* eslint-disable no-useless-catch */
import { storageMealGet, storageMealSave } from '@storage/storageMeal'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { MealByDayDTO } from '@dtos/MealByDayDTO'
import { MealDTO } from '@dtos/MealDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  meal: MealByDayDTO[]
  isLoadingMealStorageData: boolean
  saveMeal: (mealData: MealDTO) => Promise<void>
  removeMeal: (mealId: string) => Promise<void>
}

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps,
)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meal, setMeal] = useState<MealByDayDTO[]>([])
  const [isLoadingMealStorageData, setIsLoadingMealStorageData] = useState(true)

  async function saveAndUpdateMeal(meals: MealByDayDTO[]) {
    try {
      setIsLoadingMealStorageData(true)
      await storageMealSave(meals)
      setMeal(meals)
    } catch (error) {
      console.log('saveAndUpdateMeal => ', error)
    } finally {
      setIsLoadingMealStorageData(false)
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
      value={{ meal, saveMeal, removeMeal, isLoadingMealStorageData }}
    >
      {children}
    </MealContext.Provider>
  )
}
