import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonVariants = 'SOLID' | 'OUTLINE'

type ButtonStyleProps = {
  variant: ButtonVariants
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({ theme, variant }) =>
    variant === 'SOLID'
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
        `
      : css`
          background: transparent;
          border: 1px solid ${theme.COLORS.GRAY_100};
        `}
`
export const Title = styled.Text<ButtonStyleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  ${({ theme, variant }) =>
    variant === 'SOLID'
      ? css`
          color: ${theme.COLORS.WHITE};
        `
      : css`
          color: ${theme.COLORS.GRAY_100};
        `}
`
