import * as S from './styles'
import { useState } from 'react'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  title: string
  size: number
  flexNumber?: number
  errorMessage?: string | null
  openDatePicker?: () => void
  openTimePicker?: () => void
}

export function Input({
  title,
  size,
  flexNumber,
  errorMessage = null,
  openDatePicker,
  openTimePicker,
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false)

  function handleFocus() {
    setIsFocus(true)
    if (openDatePicker) {
      openDatePicker()
    }
    if (openTimePicker) {
      openTimePicker()
    }
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
      {errorMessage && <S.Label>{errorMessage}</S.Label>}
    </S.InputContainer>
  )
}
