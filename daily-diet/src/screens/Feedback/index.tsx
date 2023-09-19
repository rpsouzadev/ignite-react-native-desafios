import * as S from './styles'
import { FeedbackStatus } from '@components/FeedbackStatus'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function Feedback() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.FeedbackContainer>
      <FeedbackStatus type="GOOD" />
      <S.ButtonWrapper>
        <Button title="Ir para a página inicial" onPress={handleGoHome} />
      </S.ButtonWrapper>
    </S.FeedbackContainer>
  )
}
