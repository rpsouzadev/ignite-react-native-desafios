import { StatusBar } from 'react-native'
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'

import { Loading } from '@/components/Loading/Loading'
import { Login } from '@/screens/auth/login/login'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Login /> : <Loading />}
    </GluestackUIProvider>
  )
}
