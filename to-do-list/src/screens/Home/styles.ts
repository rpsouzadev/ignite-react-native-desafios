import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const WrapContent = styled.View`
  padding: 0 24px;
  flex: 1;
`

export const InputContainer = styled.View`
  margin-top: -30px;
  flex-direction: row;
`
