import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { StatusTypeProps } from '@components/Info/styles'

type StatisticsHeaderStylePros = {
  type: StatusTypeProps
}

export const StatisticsHeaderContainer = styled.View<StatisticsHeaderStylePros>`
  flex-direction: row;
  width: 100%;
  height: 200px;
  padding: 40px 20px;
  background-color: ${({ theme, type }) =>
    type === 'GOOD' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const StatisticsIcon = styled(
  ArrowLeft,
).attrs<StatisticsHeaderStylePros>(({ theme, type }) => ({
  size: 24,
  color: type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``
