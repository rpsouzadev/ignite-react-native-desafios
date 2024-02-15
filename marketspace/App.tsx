import { useEffect } from 'react'
import { LogBox, StatusBar } from 'react-native'
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'

import { THEME } from '@/Theme/Theme'
import { Routes } from '@/routes/routes'
import { Loading } from '@/components/Loading/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular })

  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ])
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
