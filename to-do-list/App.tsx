import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ThemeProvider>
  )
}
