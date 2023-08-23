import * as S from './styles'
import { useState } from 'react'

export function TaskCard() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <S.Container>
      <S.TaskText type={isChecked ? 'isCHECK' : 'noCHECK'}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </S.TaskText>
    </S.Container>
  )
}
