import { StatusBar } from 'expo-status-bar'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import theme from '@theme/index'
import { ThemeProvider } from 'styled-components/native'
import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  )
}
