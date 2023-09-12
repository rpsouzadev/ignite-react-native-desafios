import * as S from './styled'
import { StatisticsHeader } from '@components/StatisticsHeader'

export function Statistics() {
  return (
    <S.StatisticsContainer>
      <StatisticsHeader />

      <S.ContentContainer>
        <S.Title>Estatísticas gerais</S.Title>

        <S.Box>
          <S.TextNumber>22</S.TextNumber>
          <S.Description>
            melhor sequência de pratos dentro da dieta
          </S.Description>
        </S.Box>

        <S.Box>
          <S.TextNumber>109</S.TextNumber>
          <S.Description>refeições registradas </S.Description>
        </S.Box>

        <S.BoxWrapper>
          <S.BoxSmall type="GOOD">
            <S.TextNumber>99</S.TextNumber>
            <S.Description>refeições dentro da dieta</S.Description>
          </S.BoxSmall>

          <S.BoxSmall type="BAD">
            <S.TextNumber>10</S.TextNumber>
            <S.Description>refeições fora da dieta</S.Description>
          </S.BoxSmall>
        </S.BoxWrapper>
      </S.ContentContainer>
    </S.StatisticsContainer>
  )
}
