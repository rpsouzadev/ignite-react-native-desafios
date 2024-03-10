import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AppRoutes } from '@/routes/app.routes'

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[600]

  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}
