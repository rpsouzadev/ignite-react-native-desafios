import * as S from './styles'

export function MealCard() {
  return (
    <S.MealCardContainer>
      <S.TextHour>20:00</S.TextHour>

      <S.Divider />

      <S.TextMeal>X-tudo</S.TextMeal>

      <S.Status type="GOOD" />
    </S.MealCardContainer>
  )
}
