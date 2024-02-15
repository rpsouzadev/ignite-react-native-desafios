import { useState } from 'react'

import { FormLoginData } from './types'
import { FormLoginSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@/routes/types'

export function useLogin() {
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function toggleShowPassword() {
    setShowPassword((prevState) => !prevState)
  }

  function handleLogin({ email, password }: FormLoginData) {
    console.log('email => ', email)
    console.log('password => ', password)
  }

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return {
    errors,
    control,
    Controller,
    showPassword,
    handleLogin,
    handleSubmit,
    handleNewAccount,
    toggleShowPassword,
  }
}
