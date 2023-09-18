import styled, { css } from 'styled-components/native'

export const NewMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const ContentContainer = styled.ScrollView`
  margin-top: -20px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const InputWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`
export const InOrOutContainer = styled.View`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const InOrOutWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
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
