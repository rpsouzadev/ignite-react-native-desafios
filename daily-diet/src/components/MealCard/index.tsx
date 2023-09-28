import * as S from './styles'
import { MealDTO } from '@dtos/MealDTO'
import { TouchableOpacityProps } from 'react-native'

type MealCardProps = TouchableOpacityProps & {
  data: MealDTO
}

export function MealCard({ data, ...rest }: MealCardProps) {
  return (
    <S.MealCardContainer {...rest}>
      <S.TextHour>{data.time}</S.TextHour>

      <S.Divider />

      <S.TextMeal numberOfLines={1}>{data.name}</S.TextMeal>

      <S.Status type={data.isWithinDiet ? 'GOOD' : 'BAD'} />
    </S.MealCardContainer>
  )
}
