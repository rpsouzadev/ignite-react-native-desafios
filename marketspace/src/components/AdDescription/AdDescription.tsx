import { Text, VStack, View } from 'native-base'
import { UserPhoto } from '@/components/UserPhoto/UserPhoto'

export function AdDescription() {
  return (
    <VStack px={6} mt={5}>
      <UserPhoto
        size={6}
        fontSize="sm"
        label="Rafael Souza"
        source={{ uri: 'https://github.com/rpsouzadev.png' }}
      />

      <View bg="gray.500" rounded="full" alignSelf="baseline" mt={6} px={2}>
        <Text color="gray.700" bold fontSize="xs" textTransform="uppercase">
          Usado
        </Text>
      </View>
    </VStack>
  )
}
