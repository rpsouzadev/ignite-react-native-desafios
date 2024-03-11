import { Pressable } from 'react-native'
import { HStack, Text, View, useTheme, FlatList, VStack } from 'native-base'
import { MagnifyingGlass, Sliders } from 'phosphor-react-native'

import { AdsInfo } from './components/AdsInfo'
import { Input } from '@/components/Input/Input'
import { AdCard } from '@/components/AdCard/AdCard'
import { HomeHeader } from './components/HomeHeader'

export function Home() {
  const { colors } = useTheme()

  const data = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ]

  return (
    <VStack px={6} pt={16} flex={1}>
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

      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AdCard key={`item=${item.id}`} />}
        _contentContainerStyle={{ paddingBottom: 20 }}
      />
    </VStack>
  )
}
