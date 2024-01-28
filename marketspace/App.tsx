import { Text, View } from 'react-native'
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular })

  return (
    <GluestackUIProvider config={config}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </GluestackUIProvider>
  )
}
