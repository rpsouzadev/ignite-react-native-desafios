import { StatusTypeProps } from '@components/Info/styles'
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

type InOrOutStyleProps = {
  type?: StatusTypeProps
  status?: 'primary' | 'secondary'
}

export const InOrOutContainer = styled.View`
  margin-top: 4px;
  flex: 1;
`
export const ErrorMessage = styled.Text`
  margin-top: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
export const InOrOut = styled(TouchableOpacity)<InOrOutStyleProps>`
  min-height: 50px;
  max-height: 50px;
  padding: 8px 16px;
  border-radius: 6px;
  align-items: center;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  ${({ theme, type }) =>
    type === 'GOOD'
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `
      : type === 'BAD'
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border: 1px solid ${theme.COLORS.RED_DARK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `};
`
export const Status = styled.View<InOrOutStyleProps>`
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
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
