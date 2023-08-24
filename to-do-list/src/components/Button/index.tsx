import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <S.Container activeOpacity={0.6} {...rest}>
      <S.IconButton name="plus-circle" />
    </S.Container>
  )
}
