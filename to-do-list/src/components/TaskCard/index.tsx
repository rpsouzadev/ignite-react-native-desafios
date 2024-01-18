import { TaskProps } from '../../screens/Home/types'
import * as S from './styles'

type TaskCardProps = {
  data: TaskProps
  toggleCheck: () => void
  onRemove: () => void
}

export function TaskCard({ data, toggleCheck, onRemove }: TaskCardProps) {
  return (
    <S.Container>
      <S.checkBox type={data.isChecked} onPress={toggleCheck}>
        {data.isChecked === 'isCHECK' && <S.CheckIcon name="check" />}
      </S.checkBox>

      <S.TaskText type={data.isChecked}>{data.text}</S.TaskText>

      <S.RemoveTask onPress={onRemove}>
        <S.Trash name="trash-2" />
      </S.RemoveTask>
    </S.Container>
  )
}
