import { Center, Icon, ScrollView, Text, VStack, Pressable } from 'native-base'
import { useSignUp } from '@/screens/auth/SignUp/useSignUp'

import { HeaderSigUp } from '@/screens/auth/SignUp/components/HeaderSignUp/HeaderSignUp'
import { PhotoPicker } from '@/components/PhotoPicker/PhotoPicker'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Eye, EyeClosed } from 'phosphor-react-native'

export function SignUp() {
  const {
    Controller,
    control,
    errors,
    handleSubmit,
    showPassword,
    handleSignUp,
    handleGoLogin,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = useSignUp()

  return (
    <ScrollView flexGrow={1} showsVerticalScrollIndicator={false}>
      <VStack flex={1} py={20} px={12}>
        <HeaderSigUp />

        <Center>
          <PhotoPicker />

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="telephone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Telefone"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.telephone?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
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
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar senha"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.confirmPassword?.message}
                type={showConfirmPassword ? 'text' : 'password'}
                rightElement={
                  <Pressable onPress={toggleShowConfirmPassword}>
                    <Icon
                      as={showConfirmPassword ? Eye : EyeClosed}
                      color="gray.300"
                      size={6}
                      mr={4}
                    />
                  </Pressable>
                }
              />
            )}
          />

          <Button
            mt={4}
            title="Criar"
            colorScheme="secondary"
            onPress={handleSubmit(handleSignUp)}
          />

          <Text color="gray.200" fontSize="sm" mt={12}>
            Já tem uma conta?
          </Text>

          <Button
            title="Ir para o login"
            colorScheme="default"
            mt={4}
            onPress={handleGoLogin}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
