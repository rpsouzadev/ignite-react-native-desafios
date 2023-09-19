import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

export function MealCard({ ...rest }: TouchableOpacityProps) {
  return (
    <S.MealCardContainer {...rest}>
      <S.TextHour>20:00</S.TextHour>

      <S.Divider />

      <S.TextMeal>X-tudo</S.TextMeal>

      <S.Status type="GOOD" />
    </S.MealCardContainer>
  )
}
