import { AppNavigatorRoutesProps } from '@/routes/types'
import { useNavigation } from '@react-navigation/native'

export function useHome() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenAdDetails() {
    navigation.navigate('adDetails')
  }

  return {
    handleOpenAdDetails,
  }
}
