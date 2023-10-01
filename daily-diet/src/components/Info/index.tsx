import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

type InfoProps = TouchableOpacityProps & {
  percentage: string
  type: boolean
}

export function Info({ percentage, type, ...rest }: InfoProps) {
  return (
    <S.InfoContainer activeOpacity={0.5} type={type ? 'GOOD' : 'BAD'} {...rest}>
      <S.TextWrapper>
        <S.TextPercent>{percentage}</S.TextPercent>

        <S.TextDescription>das refeições dentro da dieta</S.TextDescription>
      </S.TextWrapper>

      <S.InfoIcon type={type ? 'GOOD' : 'BAD'} />
    </S.InfoContainer>
  )
}
