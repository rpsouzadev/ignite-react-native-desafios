import * as S from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const theme = useTheme()
  const [isFocus, setIsFocus] = useState(false)

  function handleFocus() {
    setIsFocus(true)
  }

  function handleBlur() {
    setIsFocus(false)
  }

  return (
    <S.InputText
      placeholderTextColor={theme.COLORS.GRAY_300}
      placeholder="Adicione uma nova tarefa"
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={inputRef}
      type={isFocus ? 'FOCUS' : 'BLUR'}
      {...rest}
    />
  )
}
