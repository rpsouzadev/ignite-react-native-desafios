import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { TouchableOpacity } from 'react-native'
import { useMeal } from '@hooks/useMeal'

export function StatisticsHeader() {
  const { metrics } = useMeal()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <S.StatisticsHeaderContainer type={metrics.status ? 'GOOD' : 'BAD'}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleGoBack}>
        <S.StatisticsIcon type={metrics.status ? 'GOOD' : 'BAD'} />
      </TouchableOpacity>

      <S.TextWrapper>
        <S.TextPercent>{metrics.percentage}%</S.TextPercent>

        <S.TextDescription>das refeições dentro da dieta</S.TextDescription>
      </S.TextWrapper>
    </S.StatisticsHeaderContainer>
  )
}
