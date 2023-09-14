import * as S from './styles'
import { Input } from '@components/Input'
import { Header } from '@components/Header'

export function NewMeal() {
  return (
    <S.NewMealContainer>
      <Header title="Nova refeição" />

      <S.ContentContainer>
        <Input title="Nome" size={48} />
        <Input title="Descrição" size={120} textAlignVertical="top" />
        <S.InputWrapper>
          <Input title="Data" size={48} flexNumber={1} />
          <Input title="Hora" size={48} flexNumber={1} />
        </S.InputWrapper>
      </S.ContentContainer>
    </S.NewMealContainer>
  )
}
