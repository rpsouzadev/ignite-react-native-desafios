import { HStack, ScrollView, Text, View, useTheme } from 'native-base'
import { HomeHeader } from './components/HomeHeader'
import { AdsInfo } from './components/AdsInfo'
import { Input } from '@/components/Input/Input'
import { MagnifyingGlass, Sliders } from 'phosphor-react-native'
import { Pressable } from 'react-native'

export function Home() {
  const { colors } = useTheme()

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

      <Text color="gray.300" fontSize="sm" mt={8} mb={3}>
        Compre produtos variados
      </Text>

      <Input
        placeholder="Buscar anúncio"
        rightElement={
          <HStack pr={4} space={3}>
            <MagnifyingGlass size={24} color={colors.gray[200]} />

            <View borderWidth={1} borderColor="gray.400" />

            <Pressable>
              <Sliders size={24} color={colors.gray[200]} />
            </Pressable>
          </HStack>
        }
      />
    </ScrollView>
  )
}
