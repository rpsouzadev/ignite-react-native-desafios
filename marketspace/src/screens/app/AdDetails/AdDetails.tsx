import { ScrollView, VStack } from 'native-base'
import { Header } from '@/components/Header/Header'

export function AdDetails() {
  return (
    <VStack pt={16}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
      </ScrollView>
    </VStack>
  )
}
