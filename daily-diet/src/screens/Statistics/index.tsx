import { useMeal } from '@hooks/useMeal'
import * as S from './styles'
import { StatisticsHeader } from '@components/StatisticsHeader'

export function Statistics() {
  const { metrics } = useMeal()

  return (
    <S.StatisticsContainer>
      <StatisticsHeader />

      <S.ContentContainer>
        <S.Title>Estatísticas gerais</S.Title>

        <S.Box>
          <S.TextNumber>{metrics.offensiveCount}</S.TextNumber>
          <S.Description>
            melhor sequência de pratos dentro da dieta
          </S.Description>
        </S.Box>

        <S.Box>
          <S.TextNumber>{metrics.total}</S.TextNumber>
          <S.Description>refeições registradas </S.Description>
        </S.Box>

        <S.BoxWrapper>
          <S.BoxSmall type="GOOD">
            <S.TextNumber>{metrics.totalWithinDiet}</S.TextNumber>
            <S.Description>refeições dentro da dieta</S.Description>
          </S.BoxSmall>

          <S.BoxSmall type="BAD">
            <S.TextNumber>{metrics.totalOutDiet}</S.TextNumber>
            <S.Description>refeições fora da dieta</S.Description>
          </S.BoxSmall>
        </S.BoxWrapper>
      </S.ContentContainer>
    </S.StatisticsContainer>
  )
}
