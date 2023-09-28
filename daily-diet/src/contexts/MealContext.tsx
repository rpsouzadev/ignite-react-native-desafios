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
      setMeal((meal) => {
        const newMeal = [...meal]

        const findMealByDay = newMeal.find(
          (meal) => meal.title === mealData.date,
        )

        if (findMealByDay) {
          findMealByDay.data.push(mealData)
        } else {
          const mealByDay = {
            title: mealData.date,
            data: [mealData],
          }
          newMeal.push(mealByDay)
        }

        return newMeal.sort((a, b) => {
          const dateA = new Date(a.title.split('/').reverse().join('-'))
          const dateB = new Date(b.title.split('/').reverse().join('-'))
          return dateB.getTime() - dateA.getTime()
        })
      })
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
