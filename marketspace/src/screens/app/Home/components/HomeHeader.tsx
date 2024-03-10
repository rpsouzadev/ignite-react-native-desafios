import { HStack, useTheme } from 'native-base'

import { Plus } from 'phosphor-react-native'
import { Button } from '@/components/Button/Button'
import { UserPhoto } from '@/components/UserPhoto/UserPhoto'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@/routes/types'

export function HomeHeader() {
  const { colors } = useTheme()
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  return (
    <HStack space={10} justifyContent="space-between">
      <UserPhoto
        size={12}
        name="Rafael"
        label="Boas vindas,"
        source={{ uri: 'https://github.com/rpsouzadev.png' }}
      />

      <Button
        maxW={40}
        title="Criar anúncio"
        colorScheme="secondary"
        leftIcon={<Plus size={22} color={colors.gray[600]} />}
        onPress={() => navigate('createAd')}
      />
    </HStack>
  )
}
