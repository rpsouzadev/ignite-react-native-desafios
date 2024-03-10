import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
  colorScheme?: 'primary' | 'secondary' | 'default'
}

export function Button({
  title,
  colorScheme = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <NativeBaseButton
      minH={45}
      maxH={45}
      w="full"
      flex={1}
      bg={
        colorScheme === 'primary'
          ? 'blue.400'
          : colorScheme === 'secondary'
            ? 'gray.100'
            : 'gray.500'
      }
      _pressed={{
        bg:
          colorScheme === 'primary'
            ? 'blue.400'
            : colorScheme === 'secondary'
              ? 'gray.100'
              : 'gray.500',
        opacity: 75,
      }}
      {...rest}
    >
      <Text
        color={colorScheme === 'default' ? 'gray.200' : 'gray.700'}
        fontFamily="heading"
        fontSize="md"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
