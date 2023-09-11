import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type StatusTypeProps = 'GOOD' | 'BAD'

type MealCardStyleProps = {
  type: StatusTypeProps
}

export const MealCardContainer = styled(TouchableOpacity)`
  padding: 16px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const TextHour = styled.Text`
  margin-right: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font_family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const Divider = styled.View`
  height: 14px;
  margin-right: 8px;
  border: 0.7px solid ${({ theme }) => theme.COLORS.GRAY_400};
`
export const TextMeal = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font_family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const Status = styled.View<MealCardStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  ${({ theme, type }) =>
    type === 'GOOD'
      ? css`
          background-color: ${theme.COLORS.GREEN_MID};
        `
      : css`
          background-color: ${theme.COLORS.RED_MID};
        `}
`
