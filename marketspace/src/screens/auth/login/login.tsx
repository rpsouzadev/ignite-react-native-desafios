import { Center, HStack, Heading, Image, Text } from '@gluestack-ui/themed'

import LogoImg from '@/assets/logo.png'

export function Login() {
  return (
    <HStack bg="$gray700" flex={1}>
      <Center bg="$gray600" flex={1} px="$12" pb="$16" pt="$24" rounded="$3xl">
        <Image
          source={LogoImg}
          defaultSource={LogoImg}
          alt="Logomarca"
          w="$24"
          h="$16"
        />

        <Heading fontSize="$4xl" fontFamily="$heading" color="$gray100" mt="$5">
          marketspace
        </Heading>

        <Text color="$gray300" fontSize="$sm">
          Seu espaço de compra e venda
        </Text>
      </Center>
    </HStack>
  )
}
