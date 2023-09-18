import styled, { css } from 'styled-components/native'

export const NewMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const ContentContainer = styled.View`
  flex: 1;
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
export const InOrOutWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  gap: 8px;
`
export const Label = styled.Text`
  margin-bottom: 4px;
  margin-top: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
