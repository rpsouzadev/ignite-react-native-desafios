import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 200px;
  padding: 40px 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const HeaderIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``
