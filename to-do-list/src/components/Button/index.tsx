import * as S from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

export function Button({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container activeOpacity={0.6} {...rest}>
      <Feather name="plus-circle" size={16} color={COLORS.GRAY_100} />
    </S.Container>
  )
}
