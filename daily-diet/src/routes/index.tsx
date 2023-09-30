import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { useMeal } from '@hooks/useMeal'
import { Loading } from '@components/Loading'

export function Routes() {
  const { COLORS } = useTheme()
  const { isLoadingMealStorageData } = useMeal()

  if (isLoadingMealStorageData) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
