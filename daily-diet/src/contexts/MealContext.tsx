import { ReactNode, createContext, useState } from 'react'
import { MealDTO } from 'src/dtos/MealDTO'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextDataProps = {
  saveMeal: ({ name, description, date, time, isWithinDiet }: MealDTO) => void
}

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps,
)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meal, setMeal] = useState<MealDTO>()

  function saveMeal({ name, description, date, time, isWithinDiet }: MealDTO) {
    const data = {
      name,
      description,
      date,
      time,
      isWithinDiet,
    }

    console.log(data)
    setMeal(data)
  }

  return (
    <MealContext.Provider value={{ saveMeal }}>{children}</MealContext.Provider>
  )
}
