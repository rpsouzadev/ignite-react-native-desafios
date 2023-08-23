import styled, { css } from 'styled-components/native'

export type TeskTextStyleProps = 'noCHECK' | 'isCHECK'

type TextProps = {
  type: TeskTextStyleProps
}

export const Container = styled.View`
  padding: 12px;
  min-height: 64px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const TaskText = styled.Text<TextProps>`
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
