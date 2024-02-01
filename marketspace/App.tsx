import { StatusBar } from 'react-native'
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'

import { Loading } from '@/components/Loading/Loading'
import { Login } from '@/screens/auth/Login/Login'
import { THEME } from '@/Theme/Theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Login /> : <Loading />}
    </NativeBaseProvider>
  )
}
