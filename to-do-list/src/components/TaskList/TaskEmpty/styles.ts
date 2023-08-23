import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding: 48px 20px;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const TaskEmptyImg = styled.Image`
  width: 56px;
  height: 56px;
  align-self: center;
`

export const TaskEmptyTextBold = styled.Text`
  margin-top: 16px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const TaskEmptyTextRegular = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
