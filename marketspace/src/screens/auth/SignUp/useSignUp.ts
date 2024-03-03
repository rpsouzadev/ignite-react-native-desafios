import { useEffect, useState } from 'react'

import { FormSignUpData } from './types'
import { FormSignUpSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@/routes/types'

import { celMask } from '@/utils/celMask'

export function useSignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignUpData>({
    resolver: zodResolver(FormSignUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const cel = watch('telephone')

  function toggleShowPassword() {
    setShowPassword((prevState) => !prevState)
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword((prevState) => !prevState)
  }

  function handleSignUp(data: FormSignUpData) {
    console.log('FormData => ', data)
  }

  function handleGoLogin() {
    navigation.goBack()
  }

  useEffect(() => {
    if (cel !== undefined) {
      setValue('telephone', celMask(cel))
    }
  }, [cel, setValue])

  return {
    errors,
    control,
    Controller,
    showPassword,
    handleSignUp,
    handleSubmit,
    handleGoLogin,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  }
}
