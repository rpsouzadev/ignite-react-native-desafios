import { TaskProps } from '../../screens/Home'
import * as S from './styles'

type TaskCardProps = {
  data: TaskProps
  handleToggleCheck: (id: string, checkbox: S.TeskTextStyleProps) => void
}

export function TaskCard({ data, handleToggleCheck }: TaskCardProps) {
  return (
    <S.Container>
      <S.checkBox
        type={data.isChecked}
        onPress={() => handleToggleCheck(data.id, data.isChecked)}
      >
        {data.isChecked === 'isCHECK' && <S.CheckIcon name="check" />}
      </S.checkBox>

      <S.TaskText type={data.isChecked}>{data.text}</S.TaskText>

      <S.RemoveTask>
        <S.Trash name="trash-2" />
      </S.RemoveTask>
    </S.Container>
  )
}
