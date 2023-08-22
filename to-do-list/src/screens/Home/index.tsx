import * as S from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.WrapContent>
        <S.InputContainer>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </S.InputContainer>
      </S.WrapContent>
    </S.Container>
  )
}
