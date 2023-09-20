import styled, { css } from 'styled-components/native'

export const AlertModalContainer = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Modal = styled.View`
  width: 327px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
`
export const Title = styled.Text`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`
