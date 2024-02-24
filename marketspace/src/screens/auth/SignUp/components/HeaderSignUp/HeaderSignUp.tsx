import { Center, Heading, Image, Text } from 'native-base'
import LogoImg from '@/assets/logo.png'

export function HeaderSigUp() {
  return (
    <Center mb={20}>
      <Image
        source={LogoImg}
        defaultSource={LogoImg}
        alt="Logomarca"
        w="16"
        h="10"
      />

      <Heading fontSize="lg" mt={3} mb={2}>
        Boas vindas!
      </Heading>

      <Text textAlign="center" fontSize="sm">
        Crie sua conta e use o espaço para comprar itens variados e vender seus
        produtos
      </Text>
    </Center>
  )
}
