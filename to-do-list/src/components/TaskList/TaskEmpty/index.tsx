import * as S from './styles'
import Clipboard from '../../../assets/Clipboard.png'

export function TaskEmpty() {
  return (
    <S.Container>
      <S.TaskEmptyImg source={Clipboard} />

      <S.TaskEmptyTextBold>
        Você ainda não tem tarefas cadastradas
      </S.TaskEmptyTextBold>

      <S.TaskEmptyTextRegular>
        Crie tarefas e organize seus itens a fazer
      </S.TaskEmptyTextRegular>
    </S.Container>
  )
}
