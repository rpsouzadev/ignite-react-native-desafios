import { useEffect, useRef, useState } from 'react'
import { TaskProps } from './types'
import { Alert, TextInput } from 'react-native'
import { TaskTextStyleProps } from '../../components/TaskCard/styles'
import {
  getTasksToStorage,
  saveTasksToStorage,
} from '../../storage/tasksStorage'

export function useTask() {
  const [newTask, setNewTask] = useState('')
  const [task, setTask] = useState<TaskProps[]>([])
  const [isLoadingTaskStorageData, setIsLoadingTaskStorageData] = useState(true)

  const newTaskInputRef = useRef<TextInput>(null)

  function saveText(text: string) {
    setNewTask(text)
  }

  async function handleAddNewTask() {
    try {
      if (!newTask.trim()) {
        return Alert.alert('Campo em branco.', 'Digite uma nova tarefa.')
      }

      const newTaskData: TaskProps = {
        id: Date.now().toString(),
        text: newTask.trim(),
        isChecked: 'noCHECK',
      }

      const addTask = [...task, newTaskData]

      setTask(addTask)
      await saveTasksToStorage(addTask)
      newTaskInputRef.current?.blur()
      setNewTask('')
    } catch (error) {
      console.log('ADD TASK ERROR => ', error)
      Alert.alert(
        'Adicionar tarefa',
        'Não foi possível adicionar tarefa, tenente novamente mais tarde.',
      )
    }
  }

  async function handleToggleCheck(id: string, checkbox: TaskTextStyleProps) {
    try {
      const checkboxStatus: TaskTextStyleProps =
        checkbox === 'isCHECK' ? 'noCHECK' : 'isCHECK'

      const updatedTasks = task.map((task) =>
        task.id === id ? { ...task, isChecked: checkboxStatus } : task,
      )

      setTask(updatedTasks)
      await saveTasksToStorage(updatedTasks)
    } catch (error) {
      console.log('MARK AS CHECKED ERROR => ', error)
      Alert.alert(
        'Marcar como feito',
        'Não foi possível marcar tarefa como feita, tenente novamente mais tarde.',
      )
    }
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Apagar', 'Desenha realmente apagar a tarefa?', [
      {
        text: 'Sim',
        onPress: async () => await removeTask(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  async function removeTask(id: string) {
    try {
      const updatedTasks = task.filter((task) => task.id !== id)

      setTask(updatedTasks)
      await saveTasksToStorage(updatedTasks)
    } catch (error) {
      console.log('removeTask error => ', error)
      Alert.alert(
        'Remover tarefa',
        'Não foi possível remover tarefa, tenente novamente mais tarde.',
      )
    }
  }

  async function tasksLoaded() {
    try {
      setIsLoadingTaskStorageData(true)
      const taskStorege = await getTasksToStorage()

      if (taskStorege.length > 0) {
        setTask(taskStorege)
      }
    } catch (error) {
      console.log('tasksLoaded error => ', error)
      Alert.alert(
        'Carregar tarefas',
        'Não foi possível carregar as tarefas, tenente novamente mais tarde.',
      )
    } finally {
      setIsLoadingTaskStorageData(false)
    }
  }

  useEffect(() => {
    tasksLoaded()
  }, [])

  return {
    task,
    newTask,
    saveText,
    newTaskInputRef,
    handleAddNewTask,
    handleRemoveTask,
    handleToggleCheck,
    isLoadingTaskStorageData,
  }
}
