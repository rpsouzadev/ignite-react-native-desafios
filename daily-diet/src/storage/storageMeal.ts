import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_STORAGE } from '@storage/storageConfig'
import { MealByDayDTO } from '@dtos/MealByDayDTO'

export async function storageMealSave(mealByDay: MealByDayDTO[]) {
  await AsyncStorage.setItem(MEAL_STORAGE, JSON.stringify(mealByDay))
}

export async function storageMealGet() {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)
  const mealByDay: MealByDayDTO[] = storage ? JSON.parse(storage) : []
  return mealByDay
}
