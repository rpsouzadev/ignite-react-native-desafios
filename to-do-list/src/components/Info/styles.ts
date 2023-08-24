import styled, { css } from 'styled-components/native'

type InfoStyleProps = {
  type: 'BLUE' | 'PURPLE'
}

export const Container = styled.View`
  margin-top: 32px;
  margin-bottom: 20px;
  width: 'full';
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const InfoWrap = styled.View`
  flex-direction: row;
  align-items: center;
`

export const InfoText = styled.Text<InfoStyleProps>`
  text-transform: capitalize;
  margin-right: 8px;
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'BLUE' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  `}
`

export const InfoCount = styled.Text`
  padding: 1px 8px;
  border-radius: 999px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    background: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
