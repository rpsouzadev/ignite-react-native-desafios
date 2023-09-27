import * as S from './styles'
import { FeedbackStatus } from '@components/FeedbackStatus'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
  status: boolean
}

export function Feedback() {
  const route = useRoute()
  const { status } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.FeedbackContainer>
      <FeedbackStatus type={status ? 'GOOD' : 'BAD'} />
      <S.ButtonWrapper>
        <Button title="Ir para a página inicial" onPress={handleGoHome} />
      </S.ButtonWrapper>
    </S.FeedbackContainer>
  )
}
