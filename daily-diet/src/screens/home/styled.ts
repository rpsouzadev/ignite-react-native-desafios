import styled, { css } from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font_family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
