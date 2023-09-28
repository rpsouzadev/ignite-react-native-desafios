import styled, { css } from 'styled-components/native'
import { ForkKnife } from 'phosphor-react-native'

export const EmptyListContainer = styled.View`
  align-items: center;
  flex-direction: column;
`
export const IconEllipse = styled.View`
  width: fit-content;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 8px;
`
export const Icon = styled(ForkKnife).attrs(() => ({
  size: 64,
  weight: 'duotone',
}))``
export const Title = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font_family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
