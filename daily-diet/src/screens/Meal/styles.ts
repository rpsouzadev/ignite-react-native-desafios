import styled, { css } from 'styled-components/native'

type MealStyleProps = {
  status: 'primary' | 'secondary'
}

export const MealContainer = styled.View`
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
export const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const Description = styled.Text`
  margin-bottom: 20px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const Label = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const DateText = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const Tag = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  max-width: 144px;
  align-items: center;
  border-radius: 999px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Status = styled.View<MealStyleProps>`
  width: 8px;
  height: 8px;
  margin-top: 2px;
  border-radius: 4px;
  ${({ theme, status }) =>
    status === 'primary'
      ? css`
          background-color: ${theme.COLORS.GREEN_DARK};
        `
      : css`
          background-color: ${theme.COLORS.RED_DARK};
        `}
`
export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const ButtonsWrapper = styled.View`
  flex: 1;
  gap: 8px;
  justify-content: flex-end;
`
