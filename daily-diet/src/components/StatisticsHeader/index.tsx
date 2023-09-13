import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { TouchableOpacity } from 'react-native'

export function StatisticsHeader() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <S.StatisticsHeaderContainer type="GOOD">
      <TouchableOpacity activeOpacity={0.5} onPress={handleGoBack}>
        <S.StatisticsIcon type="GOOD" />
      </TouchableOpacity>

      <S.TextWrapper>
        <S.TextPercent>90,86%</S.TextPercent>

        <S.TextDescription>das refeições dentro da dieta</S.TextDescription>
      </S.TextWrapper>
    </S.StatisticsHeaderContainer>
  )
}
