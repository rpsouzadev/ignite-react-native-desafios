import { Center, ScrollView, Text, VStack } from 'native-base'
import { HeaderSigUp } from './components/HeaderSignUp/HeaderSignUp'

export function SignUp() {
  return (
    <ScrollView flexGrow={1} showsVerticalScrollIndicator={false}>
      <VStack flex={1} py={20} px={12}>
        <HeaderSigUp />
      </VStack>
    </ScrollView>
  )
}
