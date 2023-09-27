/* eslint-disable no-useless-catch */
import { ReactNode, createContext, useState } from 'react'
import { MealByDayDTO } from '@dtos/MealByDayDTO'
import { MealDTO } from '@dtos/MealDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  meal: MealByDayDTO[]
  saveMeal: (mealData: MealDTO) => void
}

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps,
)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meal, setMeal] = useState<MealByDayDTO[]>([])

  function saveMeal(mealData: MealDTO) {
    try {
      const findMealByDay = meal.find((meal) => meal.title === mealData.date)

      if (findMealByDay) {
        findMealByDay.data.push(mealData)
        setMeal([...meal])
      } else {
        const mealByDay = {
          title: mealData.date,
          data: [mealData],
        }

        setMeal((prev) => [...prev, mealByDay])
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <MealContext.Provider value={{ meal, saveMeal }}>
      {children}
    </MealContext.Provider>
  )
}
