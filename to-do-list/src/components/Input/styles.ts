import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const InputText = styled(TextInput)`
  flex: 1;
  min-height: 54px;
  max-height: 54px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    background: ${theme.COLORS.GRAY_500};
    font-weight: ${theme.FONT_FAMILY.REGULAR};
  `};
  border-radius: 6px;
  padding: 16px;
`
