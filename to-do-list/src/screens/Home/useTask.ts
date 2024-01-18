import { useRef, useState } from 'react'
import { TaskProps } from './types'
import { Alert, TextInput } from 'react-native'
import { TaskTextStyleProps } from '../../components/TaskCard/styles'

export function useTask() {
  const [newTask, setNewTask] = useState('')
  const [task, setTask] = useState<TaskProps[]>([])

  const newTaskInputRef = useRef<TextInput>(null)

  function saveText(text: string) {
    setNewTask(text)
  }

  function handleAddNewTask() {
    try {
      if (!newTask.trim()) {
        return Alert.alert('Campo em branco.', 'Digite uma nova tarefa.')
      }

      const newTaskData: TaskProps = {
        id: Date.now().toString(),
        text: newTask.trim(),
        isChecked: 'noCHECK',
      }

      setTask((oldTasks) => [...oldTasks, newTaskData])
      newTaskInputRef.current?.blur()
      setNewTask('')
    } catch (error) {
      console.log('ADD TASK ERROR => ', error)
    }
  }

  function handleToggleCheck(id: string, checkbox: TaskTextStyleProps) {
    try {
      const checkboxStatus = checkbox === 'isCHECK' ? 'noCHECK' : 'isCHECK'

      setTask((oldTasks) =>
        oldTasks.map((task) =>
          task.id === id ? { ...task, isChecked: checkboxStatus } : task,
        ),
      )
    } catch (error) {
      console.log('MARK AS CHECKED ERROR => ', error)
    }
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Apagar', 'Desenha realmente apagar a tarefa?', [
      {
        text: 'Sim',
        onPress: () =>
          setTask((oldTasks) => oldTasks.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return {
    task,
    newTask,
    saveText,
    newTaskInputRef,
    handleAddNewTask,
    handleRemoveTask,
    handleToggleCheck,
  }
}
