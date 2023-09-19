import * as S from './styles'
import { StatusTypeProps } from '@components/Info/styles'
import BadIllustration from '@assets/bad_illustration.png'
import GoodIllustration from '@assets/good_illustration.png'

type FeedbackStatusProps = {
  type: StatusTypeProps
}

export function FeedbackStatus({ type }: FeedbackStatusProps) {
  return (
    <>
      {type === 'GOOD' ? (
        <S.FeedbackStatusContainer>
          <S.Title type="primary">Continue assim!</S.Title>
          <S.Description>
            Você continua <S.TextBold>dentro da dieta</S.TextBold>. Muito bem!
          </S.Description>
          <S.Illustration source={GoodIllustration} />
        </S.FeedbackStatusContainer>
      ) : (
        <S.FeedbackStatusContainer>
          <S.Title type="secondary">Que pena!</S.Title>
          <S.Description>
            Você <S.TextBold>saiu da dieta</S.TextBold> dessa vez, mas continue
            se esforçando e não desista!
          </S.Description>
          <S.Illustration source={BadIllustration} />
        </S.FeedbackStatusContainer>
      )}
    </>
  )
}
