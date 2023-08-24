import * as S from './styles'
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Info } from '../../components/Info'
import { TaskCard } from '../../components/TaskCard'
import { Alert, FlatList } from 'react-native'
import { TaskEmpty } from '../../components/TaskEmpty'

export type TaskProps = {
  id: string
  text: string
  isChecked: boolean
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
        isChecked: false,
      }

      setTask((oldTasks) => [...oldTasks, newTaskData])
    } catch (error) {
      console.log('ERROR => ', error)
    }
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
          renderItem={({ item }) => <TaskCard data={item} />}
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
