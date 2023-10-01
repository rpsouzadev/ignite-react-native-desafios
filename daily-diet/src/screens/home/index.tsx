import * as S from './styles'
import { Info } from '@components/Info'
import { useMeal } from '@hooks/useMeal'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { HomeHeader } from '@components/HomeHeader'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { SectionMealList } from '@components/SectionMealList'

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()
  const { metrics } = useMeal()

  function handleOpenStatistics() {
    navigation.navigate('statistics')
  }

  function handleOpenNewMeal() {
    navigation.navigate('new')
  }

  return (
    <S.HomeContainer>
      <HomeHeader />

      <Info
        type={metrics.status}
        percentage={`${metrics.percentage}%`}
        onPress={handleOpenStatistics}
      />

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

      <SectionMealList />
    </S.HomeContainer>
  )
}
