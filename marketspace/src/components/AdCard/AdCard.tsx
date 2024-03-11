import { Box, Image, Text, Pressable } from 'native-base'
import Shoes from '@/assets/ad.png'
import { UserPhoto } from '@/components/UserPhoto/UserPhoto'

export function AdCard() {
  return (
    <Pressable mb={6} flex={1} position="relative">
      <Box>
        <Image w="full" h={26} alt="" rounded={6} source={Shoes} />

        <UserPhoto
          size={6}
          position="absolute"
          top={-96}
          left={1}
          source={{ uri: 'https://github.com/rpsouzadev.png' }}
        />

        <Box
          bg="blue.500"
          rounded="full"
          px={2}
          position="absolute"
          alignSelf="flex-end"
          top={1}
          right={1}
        >
          <Text color="gray.700" bold fontSize="xs" textTransform="uppercase">
            Usado
          </Text>
        </Box>
      </Box>

      <Text fontSize="sm" color="gray.200">
        Tênis vermelho
      </Text>

      <Text fontSize="xs" color="gray.100" bold>
        R${' '}
        <Text fontSize="md" color="gray.100" bold>
          59,90
        </Text>
      </Text>
    </Pressable>
  )
}
