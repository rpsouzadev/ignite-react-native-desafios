import * as S from './styles'

export function Info() {
  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoText type="BLUE">Criadas</S.InfoText>

        <S.InfoCount>0</S.InfoCount>
      </S.InfoWrap>

      <S.InfoWrap>
        <S.InfoText type="PURPLE">Concluídas</S.InfoText>

        <S.InfoCount>0</S.InfoCount>
      </S.InfoWrap>
    </S.Container>
  )
}
