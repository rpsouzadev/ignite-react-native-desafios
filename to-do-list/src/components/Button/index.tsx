import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

export function Button({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container activeOpacity={0.6} {...rest}>
      <S.IconButton name="plus-circle" />
    </S.Container>
  )
}
