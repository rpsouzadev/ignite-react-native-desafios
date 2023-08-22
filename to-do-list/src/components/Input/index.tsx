import * as S from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps

export function Input({ ...rest }: InputProps) {
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={isFocus ? 'FOCUS' : 'BLUR'}
      {...rest}
    />
  )
}
