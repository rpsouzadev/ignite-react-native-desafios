/* eslint-disable no-useless-catch */
import { storageMealGet, storageMealSave } from '@storage/storageMeal'
import { ReactNode, createContext, useState } from 'react'
import { MealByDayDTO } from '@dtos/MealByDayDTO'
import { MealDTO } from '@dtos/MealDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  meal: MealByDayDTO[]
  saveMeal: (mealData: MealDTO) => void
  removeMeal: (mealId: string) => void
}

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps,
)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meal, setMeal] = useState<MealByDayDTO[]>([])

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

      setMeal(newMeal)
    } catch (error) {
      throw error
    }
  }

  function removeMeal(mealId: string) {
    try {
      setMeal((meals) => {
        const updatedMeals = meals.map((meal) => {
          meal.data = meal.data.filter((data) => data.id !== mealId)
          return meal
        })

        const currentMeals = updatedMeals.filter((meal) => meal.data.length > 0)

        storageMealSave(currentMeals)

        return currentMeals
      })
    } catch (error) {
      throw error
    }
  }

  return (
    <MealContext.Provider value={{ meal, saveMeal, removeMeal }}>
      {children}
    </MealContext.Provider>
  )
}
