import * as S from './styles'
import { useState } from 'react'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  title: string
  size: number
  flexNumber?: number
}

export function Input({ title, size, flexNumber, ...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false)

  function handleFocus() {
    setIsFocus(true)
  }

  function handleBlur() {
    setIsFocus(false)
  }

  return (
    <S.InputContainer flexNumber={flexNumber}>
      <S.Label>{title}</S.Label>
      <S.InputText
        size={size}
        onBlur={handleBlur}
        onFocus={handleFocus}
        focus={isFocus ? 'isFOCUS' : 'isBLUR'}
        {...rest}
      />
    </S.InputContainer>
  )
}
