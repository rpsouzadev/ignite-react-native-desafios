import {
  Center,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

import { Eye } from 'phosphor-react-native'

import LogoImg from '@/assets/logo.png'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

export function Login() {
  return (
    <ScrollView bg="gray.700" flex={1}>
      <VStack>
        <Center bg="gray.600" px={12} pb={16} pt={24} rounded="3xl">
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

          <Text color="gray.200" fontSize="md" mt={20} mb={4}>
            Acesse sua conta
          </Text>

          <Input mb={4} placeholder="E-mail" />

          <Input
            mb={8}
            placeholder="Senha"
            rightElement={<Icon as={Eye} color="gray.300" size={6} mr={4} />}
          />

          <Button title="Entrar" />
        </Center>
      </VStack>
    </ScrollView>
  )
}
