import { StatusBar } from 'expo-status-bar'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import theme from '@theme/index'
import { ThemeProvider } from 'styled-components/native'
import { Home } from '@screens/home'

export default function App() {
  const [fonstsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  )
}
