import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton minH={45} maxH={45} w="full" {...rest}>
      <Text color="gray.700" fontFamily="heading" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  )
}
