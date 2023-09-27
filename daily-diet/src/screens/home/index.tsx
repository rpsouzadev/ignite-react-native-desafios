import * as S from './styles'
import { Info } from '@components/Info'
import { HomeHeader } from '@components/HomeHeader'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { MealCard } from '@components/MealCard'
import { useNavigation } from '@react-navigation/native'
import { useMeal } from '@hooks/useMeal'
import { SectionList } from 'react-native'

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()
  const { meal } = useMeal()

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

      <SectionList
        sections={meal}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard data={item} onPress={handleOpenMeal} />
        )}
        renderSectionHeader={({ section }) => (
          <S.Title>{section.title}</S.Title>
        )}
      />
    </S.HomeContainer>
  )
}
