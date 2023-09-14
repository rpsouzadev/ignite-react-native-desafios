import styled from 'styled-components/native'

export const NewMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const ContentContainer = styled.View`
  flex: 1;
  margin-top: -20px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const InputWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`
