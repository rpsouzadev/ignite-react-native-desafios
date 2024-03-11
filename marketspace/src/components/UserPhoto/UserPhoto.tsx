import { Box, HStack, IImageProps, Image, Text } from 'native-base'

type UserPhotoProps = IImageProps & {
  size: number
  label?: string
  name?: string
}

export function UserPhoto({ size, label, name, ...rest }: UserPhotoProps) {
  return (
    <HStack alignItems="center" space={2.5}>
      <Image
        w={size}
        h={size}
        rounded="full"
        borderWidth={2}
        borderColor="blue.400"
        alt=""
        {...rest}
      />

      {label && (
        <Box>
          <Text>{label}</Text>

          <Text bold>{name}</Text>
        </Box>
      )}
    </HStack>
  )
}
