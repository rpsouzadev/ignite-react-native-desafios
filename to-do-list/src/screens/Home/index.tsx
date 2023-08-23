import * as S from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Info } from '../../components/Info'
import { TaskCard } from '../../components/TaskList/TaskCard'

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.WrapContent>
        <S.InputContainer>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </S.InputContainer>

        <Info />

        <TaskCard />
      </S.WrapContent>
    </S.Container>
  )
}
