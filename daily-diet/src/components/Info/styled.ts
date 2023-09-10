import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

export type InfoColorSchemeType = 'PRIMARY' | 'SECONDARY'

type InfoStyledPros = {
  type: InfoColorSchemeType
}

export const InfoContainer = styled(TouchableOpacity)<InfoStyledPros>`
  flex-direction: row;
  width: 100%;
  height: 102px;
  padding: 8px;
  margin-top: 40px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const TextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TextPercent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['3XL']}px;
  `}
`

export const TextDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const InfoIcon = styled(ArrowUpRight).attrs<InfoStyledPros>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)``
