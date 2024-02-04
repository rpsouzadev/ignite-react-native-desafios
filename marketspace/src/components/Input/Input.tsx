import { FormControl, Input as NativeBeseInput, IInputProps } from 'native-base'

type InputProps = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl w="full" isInvalid={invalid} mb={4} flex={1}>
      <NativeBeseInput
        bg="gray.700"
        minH={45}
        maxH={45}
        rounded={6}
        borderWidth={0}
        px={4}
        w="full"
        fontFamily="body"
        fontSize="md"
        color="gray.200"
        placeholderTextColor="gray.400"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'gray.300',
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
