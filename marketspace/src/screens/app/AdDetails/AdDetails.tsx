import { Box, ScrollView, VStack } from 'native-base'
import { Header } from '@/components/Header/Header'
import { AdDescription } from '@/components/AdDescription/AdDescription'

export function AdDetails() {
  return (
    <VStack pt={16}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px={6}>
          <Header />
        </Box>

        <AdDescription />
      </ScrollView>
    </VStack>
  )
}
