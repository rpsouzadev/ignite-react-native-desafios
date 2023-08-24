import * as S from './styles'
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Info } from '../../components/Info'
import { TaskCard } from '../../components/TaskCard'
import { Alert, FlatList } from 'react-native'
import { TaskEmpty } from '../../components/TaskEmpty'
import { TeskTextStyleProps } from '../../components/TaskCard/styles'

export type TaskProps = {
  id: string
  text: string
  isChecked: TeskTextStyleProps
}

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [task, setTask] = useState<TaskProps[]>([])

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
    } catch (error) {
      console.log('ADD TASK ERROR => ', error)
    }
  }

  function handleToggleCheck(id: string, checkbox: TeskTextStyleProps) {
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

  return (
    <S.Container>
      <Header />

      <S.WrapContent>
        <S.InputContainer>
          <Input value={newTask} onChangeText={setNewTask} />
          <Button onPress={handleAddNewTask} />
        </S.InputContainer>

        <Info />

        <FlatList
          data={task}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              data={item}
              toggleCheck={() => handleToggleCheck(item.id, item.isChecked)}
              onRemove={() => handleRemoveTask(item.id)}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <TaskEmpty />}
        />
      </S.WrapContent>
    </S.Container>
  )
}
