import { useState } from 'react'

export function useLogin() {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword((prevState) => !prevState)
  }

  return {
    showPassword,
    toggleShowPassword,
  }
}
