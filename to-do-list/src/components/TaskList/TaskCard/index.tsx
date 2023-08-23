import * as S from './styles'
import { useState } from 'react'

export function TaskCard() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <S.Container>
      <S.checkBox type={isChecked ? 'isCHECK' : 'noCHECK'}>
        {isChecked && <S.CheckIcon name="check" />}
      </S.checkBox>

      <S.TaskText type={isChecked ? 'isCHECK' : 'noCHECK'}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </S.TaskText>

      <S.RemoveTask>
        <S.Trash name="trash-2" />
      </S.RemoveTask>
    </S.Container>
  )
}
