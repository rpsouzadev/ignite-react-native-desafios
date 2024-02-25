import { Center, Icon, Image, Pressable, View, useTheme } from 'native-base'
import ImgProfile from '@/assets/avatar.png'
import { PencilSimpleLine } from 'phosphor-react-native'

export function PhotoPicker() {
  const { colors } = useTheme()

  return (
    <View
      w="24"
      h="24"
      rounded="full"
      borderWidth={4}
      borderColor="blueLight"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Image
        source={ImgProfile}
        defaultSource={ImgProfile}
        alt="avatar"
        w="full"
      />

      <Pressable
        size={10}
        bg="blueLight"
        rounded="full"
        position="absolute"
        bottom={-4}
        right={-10}
        justifyContent="center"
        alignItems="center"
        _pressed={{
          bg: 'blue.500',
        }}
      >
        <PencilSimpleLine size={16} color={colors.gray[600]} />
      </Pressable>
    </View>
  )
}
