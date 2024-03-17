import { AppNavigatorRoutesProps } from '@/routes/types'
import { useNavigation } from '@react-navigation/native'
import { Box, HStack, Text, Pressable, useTheme } from 'native-base'
import { ArrowRight, Tag } from 'phosphor-react-native'

export function AdsInfo() {
  const { colors } = useTheme()
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Pressable
      p={4}
      px={6}
      mt={3}
      rounded="md"
      bg="blue.100"
      onPress={() => navigate('myAds')}
    >
      <HStack alignItems="center" space={2.5}>
        <Tag size={28} color={colors.blue[500]} />

        <Box flex={1}>
          <Text bold fontSize="lg" color="gray.200">
            4
          </Text>

          <Text fontSize="xs" color="gray.200">
            anúncios ativos
          </Text>
        </Box>

        <Text color="blue.500" fontSize="xs" bold>
          Meus anúncios
        </Text>

        <ArrowRight size={24} color={colors.blue[500]} />
      </HStack>
    </Pressable>
  )
}
