import { Center, ScrollView, Text, VStack } from 'native-base'
import { HeaderSigUp } from './components/HeaderSignUp/HeaderSignUp'
import { PhotoPicker } from '@/components/PhotoPicker/PhotoPicker'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

export function SignUp() {
  return (
    <ScrollView flexGrow={1} showsVerticalScrollIndicator={false}>
      <VStack flex={1} py={20} px={12}>
        <HeaderSigUp />

        <Center>
          <PhotoPicker />

          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar senha" />

          <Button title="Criar" colorScheme="secondary" mt={4} />

          <Text color="gray.200" fontSize="sm" mt={12}>
            Já tem uma conta?
          </Text>

          <Button title="Ir para o login" colorScheme="default" mt={4} />
        </Center>
      </VStack>
    </ScrollView>
  )
}
