import * as S from './styles'
import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  title: string
  size: number
  flexNumber?: number
  errorMessage?: string | null
  openDatePicker?: () => void
  openTimePicker?: () => void
  inputRef?: React.RefObject<TextInput>
}

export function Input({
  title,
  size,
  flexNumber,
  inputRef,
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
        ref={inputRef}
        focus={isFocus ? 'isFOCUS' : 'isBLUR'}
        {...rest}
      />
      {errorMessage && <S.Label>{errorMessage}</S.Label>}
    </S.InputContainer>
  )
}
