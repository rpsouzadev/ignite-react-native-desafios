import { Center, Heading, Image, Text, VStack } from 'native-base'

import LogoImg from '@/assets/logo.png'
import { Input } from '@/components/Input/Input'

export function Login() {
  return (
    <VStack bg="gray.700" flex={1}>
      <Center bg="gray.600" flex={1} px={12} pb={16} pt={24} rounded="3xl">
        <Image
          source={LogoImg}
          defaultSource={LogoImg}
          alt="Logomarca"
          w="24"
          h="16"
        />

        <Heading fontSize="4xl" fontFamily="heading" color="gray.100" mt={5}>
          marketspace
        </Heading>

        <Text color="gray.300" fontSize="sm">
          Seu espaço de compra e venda
        </Text>

        <Input />
      </Center>
    </VStack>
  )
}
