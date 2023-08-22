import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

type InputStyleProps = {
  type: 'FOCUS' | 'BLUR'
}

export const InputText = styled(TextInput)<InputStyleProps>`
  flex: 1;
  min-height: 54px;
  max-height: 54px;
  ${({ theme, type }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    background: ${theme.COLORS.GRAY_500};
    border-color: ${type === 'FOCUS'
      ? theme.COLORS.PURPLE_DARK
      : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
`
