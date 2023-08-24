import * as S from './styles'
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Info } from '../../components/Info'
import { TaskCard } from '../../components/TaskCard'
import { FlatList } from 'react-native'
import { TaskEmpty } from '../../components/TaskEmpty'

type TeskProps = {
  id: Date
  task: string
}

export function Home() {
  const [task, setTask] = useState([])

  return (
    <S.Container>
      <Header />

      <S.WrapContent>
        <S.InputContainer>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </S.InputContainer>

        <Info />

        <FlatList
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <TaskCard />}
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
