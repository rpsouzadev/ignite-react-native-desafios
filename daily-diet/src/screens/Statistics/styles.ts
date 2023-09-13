import { StatusTypeProps } from '@components/Info/styles'
import styled, { css } from 'styled-components/native'

type StatisticsStyleProps = {
  type: StatusTypeProps
}

export const StatisticsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const ContentContainer = styled.View`
  flex: 1;
  margin-top: -30px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Title = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const TextNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE['2XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const Description = styled.Text`
  margin-top: 10px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const Box = styled.View`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const BoxSmall = styled.View<StatisticsStyleProps>`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'GOOD' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
export const BoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
