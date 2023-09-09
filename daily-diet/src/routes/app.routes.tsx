import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditMeal } from '@screens/EditMeal'
import { Feedback } from '@screens/Feedback'
import { Meal } from '@screens/Meal'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistics'
import { Home } from '@screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="new" component={NewMeal} />
      <Screen name="edit" component={EditMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
