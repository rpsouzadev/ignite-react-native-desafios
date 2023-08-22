import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 173px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`
