import * as S from './styles'
import { Info } from '@components/Info'
import { HomeHeader } from '@components/HomeHeader'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { MealCard } from '@components/MealCard'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleOpenStatistics() {
    navigation.navigate('statistics')
  }

  function handleOpenNewMeal() {
    navigation.navigate('new')
  }

  function handleOpenMeal() {
    navigation.navigate('meal')
  }

  return (
    <S.HomeContainer>
      <HomeHeader />

      <Info percentage="90,86%" onPress={handleOpenStatistics} />

      <S.Title>Refeições</S.Title>

      <Button
        title="Nova Refeição"
        Icon={
          <Plus
            color={theme.COLORS.WHITE}
            size={18}
            style={{ marginRight: 8 }}
          />
        }
        onPress={handleOpenNewMeal}
      />

      <MealCard onPress={handleOpenMeal} />
    </S.HomeContainer>
  )
}
