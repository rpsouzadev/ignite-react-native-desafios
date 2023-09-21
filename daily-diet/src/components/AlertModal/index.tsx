import { Button } from '@components/Button'
import * as S from './styles'

type AlertModalProps = {
  visible: boolean
  onCancel: () => void
  onConfirm: () => void
}

export function AlertModal({ visible, onCancel, onConfirm }: AlertModalProps) {
  return (
    <S.AlertModalContainer
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <S.ModalWrapper>
        <S.Modal>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>

          <S.ButtonWrapper>
            <Button title="Cancelar" variant="OUTLINE" onPress={onCancel} />
            <Button title="Sim, excluir" onPress={onConfirm} />
          </S.ButtonWrapper>
        </S.Modal>
      </S.ModalWrapper>
    </S.AlertModalContainer>
  )
}
