import { TaskProps } from '../../screens/Home'
import * as S from './styles'
import { useState } from 'react'

type TaskCardProps = {
  data: TaskProps
}

export function TaskCard({ data }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(data.isChecked)

  return (
    <S.Container>
      <S.checkBox type={isChecked ? 'isCHECK' : 'noCHECK'}>
        {isChecked && <S.CheckIcon name="check" />}
      </S.checkBox>

      <S.TaskText type={isChecked ? 'isCHECK' : 'noCHECK'}>
        {data.text}
      </S.TaskText>

      <S.RemoveTask>
        <S.Trash name="trash-2" />
      </S.RemoveTask>
    </S.Container>
  )
}
