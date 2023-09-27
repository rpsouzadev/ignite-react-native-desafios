import styled, { css } from 'styled-components/native'

export const Title = styled.Text`
  margin-top: 30px;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font_family: ${theme.FONT_FAMILY.BOLD};
  `}
`
