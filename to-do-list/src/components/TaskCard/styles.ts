import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type TeskTextStyleProps = 'noCHECK' | 'isCHECK'

type TextProps = {
  type: TeskTextStyleProps
}

export const Container = styled.View`
  padding: 12px;
  padding-right: 8px;
  margin-bottom: 8px;
  min-height: 64px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  border-width: 1px;
  justify-content: space-between;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const TaskText = styled.Text<TextProps>`
  max-width: 280px;
  ${({ theme, type }) => css`
    color: ${type === 'noCHECK'
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    ${type === 'isCHECK' &&
    css`
      text-decoration: line-through;
    `}
  `}
`

export const checkBox = styled(TouchableOpacity)<TextProps>`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  ${({ theme, type }) =>
    type === 'isCHECK'
      ? css`
          background-color: ${theme.COLORS.PURPLE_DARK};
        `
      : css`
          border-width: 1px;

          border-color: ${theme.COLORS.BLUE};
        `}
`

export const RemoveTask = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`

export const CheckIcon = styled(Feather).attrs(({ theme }) => ({
  size: 12,
  color: theme.COLORS.GRAY_100,
}))``

export const Trash = styled(Feather).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_300,
}))``
