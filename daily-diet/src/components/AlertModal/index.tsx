import { Button } from '@components/Button'
import * as S from './styles'

export function AlertModal() {
  return (
    <S.AlertModalContainer
      animationType="fade"
      transparent={true}
      visible={true}
    >
      <S.ModalWrapper>
        <S.Modal>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>

          <S.ButtonWrapper>
            <Button title="Cancelar" variant="OUTLINE" />
            <Button title="Sim, excluir" />
          </S.ButtonWrapper>
        </S.Modal>
      </S.ModalWrapper>
    </S.AlertModalContainer>
  )
}
