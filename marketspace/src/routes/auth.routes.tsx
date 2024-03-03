import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@/screens/auth/Login/Login'
import { SignUp } from '@/screens/auth/SignUp/SignUp'
import { AuthRoutesProps } from '@/routes/types'

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={Login} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
