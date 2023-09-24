import { useContext } from 'react'
import { MealContext } from '@contexts/MealContext'

export function useMeal() {
  const context = useContext(MealContext)
  return context
}
