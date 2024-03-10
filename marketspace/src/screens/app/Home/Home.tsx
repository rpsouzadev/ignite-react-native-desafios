import { ScrollView, Text } from 'native-base'
import { HomeHeader } from './components/HomeHeader'
import { AdsInfo } from './components/AdsInfo'

export function Home() {
  return (
    <ScrollView
      flexGrow={1}
      showsVerticalScrollIndicator={false}
      px={6}
      pt={16}
    >
      <HomeHeader />

      <Text color="gray.300" fontSize="sm" mt={8}>
        Seus produtos anunciados para venda
      </Text>

      <AdsInfo />
    </ScrollView>
  )
}
