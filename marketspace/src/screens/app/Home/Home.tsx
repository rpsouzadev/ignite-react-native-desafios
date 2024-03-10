import { UserPhoto } from '@/components/UserPhoto/UserPhoto'
import { ScrollView, Text } from 'native-base'
import { HomeHeader } from './components/HomeHeader'

export function Home() {
  return (
    <ScrollView
      flexGrow={1}
      showsVerticalScrollIndicator={false}
      px={6}
      pt={16}
    >
      <HomeHeader />
    </ScrollView>
  )
}
