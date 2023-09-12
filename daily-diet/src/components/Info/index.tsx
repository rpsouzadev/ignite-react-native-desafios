import * as S from './styled'
import { TouchableOpacityProps } from 'react-native'

type InfoProps = TouchableOpacityProps & {
  percentage: string
  type?: S.StatusTypeProps
}

export function Info({ percentage, type = 'GOOD', ...rest }: InfoProps) {
  return (
    <S.InfoContainer activeOpacity={0.5} type={type} {...rest}>
      <S.TextWrapper>
        <S.TextPercent>{percentage}</S.TextPercent>

        <S.TextDescription>das refeições dentro da dieta</S.TextDescription>
      </S.TextWrapper>

      <S.InfoIcon type={type} />
    </S.InfoContainer>
  )
}
