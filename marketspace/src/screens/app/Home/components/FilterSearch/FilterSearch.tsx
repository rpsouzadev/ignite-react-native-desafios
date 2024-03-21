import { Button } from '@/components/Button/Button'
import { FilterOptions } from '@/components/FilterOptions/FilterOptions'
import {
  HStack,
  Modal,
  Pressable,
  ScrollView,
  Switch,
  Text,
  VStack,
  useTheme,
} from 'native-base'
import { X, XCircle } from 'phosphor-react-native'

export function FilterSearch() {
  const { colors } = useTheme()

  return (
    <Modal isOpen={false} justifyContent="flex-end">
      <VStack w="full" bg="gray.600" roundedTop="3xl" pt={12} px={6} pb={8}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text color="gray.100" fontFamily="heading" fontSize="lg">
              Filtrar anúncios
            </Text>

            <X color={colors.gray[400]} size={24} />
          </HStack>

          <Text fontFamily="heading" fontSize="sm" mt={6}>
            Condição
          </Text>

          <HStack mt={3} space={2}>
            <Pressable
              rounded="full"
              flexDirection="row"
              alignItems="center"
              py={1.5}
              px={2}
              bg="blue.400"
            >
              <Text
                mr={1}
                color="gray.700"
                textTransform="uppercase"
                fontFamily="heading"
                fontSize="xs"
              >
                NOVO
              </Text>

              <XCircle size={16} color={colors.gray[600]} weight="fill" />
            </Pressable>

            <Pressable
              rounded="full"
              flexDirection="row"
              alignItems="center"
              py={1.5}
              px={2}
              bg="blue.400"
            >
              <Text
                mr={1}
                color="gray.700"
                textTransform="uppercase"
                fontFamily="heading"
                fontSize="xs"
              >
                Usado
              </Text>

              <XCircle size={16} color={colors.gray[600]} weight="fill" />
            </Pressable>
          </HStack>

          <FilterOptions />

          <HStack space={3}>
            <Button title="Resatar filtros" colorScheme="default" />
            <Button title="Aplicar filtros" colorScheme="secondary" />
          </HStack>
        </ScrollView>
      </VStack>
    </Modal>
  )
}