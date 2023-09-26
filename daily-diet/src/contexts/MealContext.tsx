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
    const mealDataWithTitle = {
      title: mealData.date,
      data: [mealData],
    }

    setMeal((prev) => [...prev, mealDataWithTitle])
  }

  return (
    <MealContext.Provider value={{ meal, saveMeal }}>
      {children}
    </MealContext.Provider>
  )
}
