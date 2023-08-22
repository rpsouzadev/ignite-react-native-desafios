import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  background: ${({ theme }) => theme.COLORS.BLUE_DARK};
`
