import styled from 'styled-components/native'

export const HomeHeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-top: 50px;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 80px;
  height: 40px;
`
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
export const AvatarEllipse = styled.View`
  width: inherit;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`
