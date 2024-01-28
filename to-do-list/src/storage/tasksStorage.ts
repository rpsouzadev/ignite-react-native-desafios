import AsyncStorage from '@react-native-async-storage/async-storage'
import { TaskProps } from '../screens/Home/types'
import { TASKS_STORAGE } from './storageConfig'

export async function saveTasksToStorage(tasks: TaskProps[]) {
  try {
    await AsyncStorage.setItem(TASKS_STORAGE, JSON.stringify(tasks))
  } catch (error) {
    throw error
  }
}

export async function getTasksToStorage() {
  try {
    const storage = await AsyncStorage.getItem(TASKS_STORAGE)
    const tasks: TaskProps[] = storage ? JSON.parse(storage) : []
    return tasks
  } catch (error) {
    throw error
  }
}
