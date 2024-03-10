import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type AuthRoutesProps = {
  signIn: undefined
  signUp: undefined
}

// eslint-disable-next-line prettier/prettier
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>
  

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  aditAd: undefined
  signOut: undefined
  createAd: undefined
  adDetails: undefined
  adPreview: undefined
  myAdDetails: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>
