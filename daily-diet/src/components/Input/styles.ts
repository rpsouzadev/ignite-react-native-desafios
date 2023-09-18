import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type InputContainerStyleProps = {
  flexNumber: number | undefined
}
type InputStyleProps = {
  focus: 'isFOCUS' | 'isBLUR'
  size: number
}
export const InputContainer = styled.View<InputContainerStyleProps>`
  margin: 10px 0px;
  ${({ flexNumber }) =>
    flexNumber &&
    css`
      flex: ${flexNumber};
    `}
`
export const Label = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const ErrorMessage = styled.Text`
  margin-top: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
export const InputText = styled(TextInput)<InputStyleProps>`
  ${({ theme, focus, size }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    background: ${theme.COLORS.GRAY_700};
    border-color: ${focus === 'isFOCUS'
      ? theme.COLORS.GRAY_300
      : theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    min-height: ${size}px;
    max-height: ${size}px;
  `};
  padding: 8px 16px;
  border-width: 1px;
  border-radius: 6px;
`
