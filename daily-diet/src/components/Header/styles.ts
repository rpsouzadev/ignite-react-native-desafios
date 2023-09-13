import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { StatusTypeProps } from '@components/Info/styles'

type HomeStyleProps = {
  type: StatusTypeProps
}

export const HeaderContainer = styled.View<HomeStyleProps>`
  flex-direction: row;
  width: 100%;
  height: 130px;
  padding: 40px 20px;
  align-items: center;
  justify-content: center;
  ${({ theme, type }) =>
    type === 'GOOD'
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : type === 'BAD'
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_500};
        `};
`
export const Title = styled.Text`
  flex: 1;
  text-align: center;
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
