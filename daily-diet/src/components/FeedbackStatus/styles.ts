import styled, { css } from 'styled-components/native'

type FeedbackStatusStyleProps = {
  type: 'primary' | 'secondary'
}

export const FeedbackStatusContainer = styled.View`
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text<FeedbackStatusStyleProps>`
  margin-bottom: 10px;
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['2XL']}px;
    color: ${type === 'primary'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`
export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`
export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`
export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin: 40px 0;
`
