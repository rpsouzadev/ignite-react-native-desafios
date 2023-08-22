import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps

export default function Input({ ...rest }: InputProps) {
  const theme = useTheme()

  return <S.InputText placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
}
