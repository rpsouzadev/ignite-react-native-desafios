import { useTheme } from 'native-base'
import { Platform } from 'react-native'
import { AppRoutesProps } from './types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '@/screens/app/Home/Home'
import { MyAds } from '@/screens/app/MyAds/MyAds'
import { AditAd } from '@/screens/app/AditAd/AditAd'
import { CreateAd } from '@/screens/app/CreateAd/CreateAd'
import { AdDetails } from '@/screens/app/AdDetails/AdDetails'
import { AdPreview } from '@/screens/app/AdPreview/AdPreview'
import { MyAdDetails } from '@/screens/app/MyAdDetails/MyAdDetails'
import { Login } from '@/screens/auth/Login/Login'
import { House, SignOut, Tag } from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
  const { colors, sizes } = useTheme()

  const iconSize = sizes[6]

  const redLight = '#EE7979'

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingTop: sizes[7],
          paddingBottom: sizes[7],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={iconSize} weight="bold" />
          ),
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag color={color} size={iconSize} weight="bold" />
          ),
        }}
      />

      <Screen
        name="signOut"
        component={Login}
        options={{
          tabBarIcon: () => (
            <SignOut color={redLight} size={iconSize} weight="bold" />
          ),
        }}
      />

      <Screen
        name="aditAd"
        component={AditAd}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="createAd"
        component={CreateAd}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="adDetails"
        component={AdDetails}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="adPreview"
        component={AdPreview}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="myAdDetails"
        component={MyAdDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}
