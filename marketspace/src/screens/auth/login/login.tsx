import {
  Center,
  Heading,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

import { Eye, EyeClosed } from 'phosphor-react-native'

import { useLogin } from './useLogin'

import LogoImg from '@/assets/logo.png'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

export function Login() {
  const { showPassword, toggleShowPassword } = useLogin()

  return (
    <ScrollView bg="gray.700" flex={1} pb={100}>
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
            type={showPassword ? 'text' : 'password'}
            rightElement={
              <Pressable onPress={toggleShowPassword}>
                <Icon
                  as={showPassword ? Eye : EyeClosed}
                  color="gray.300"
                  size={6}
                  mr={4}
                />
              </Pressable>
            }
          />

          <Button title="Entrar" />
        </Center>

        <Center px={12}>
          <Text color="gray.200" fontSize="md" mt={16} mb={4}>
            Ainda não tem acesso?
          </Text>

          <Button title="Criar uma conta" colorScheme="default" />
        </Center>
      </VStack>
    </ScrollView>
  )
}
