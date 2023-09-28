import * as S from './styles'
import { useMeal } from '@hooks/useMeal'
import { SectionList } from 'react-native'
import { MealCard } from '@components/MealCard'
import { useNavigation } from '@react-navigation/native'
import { EmptyList } from './EmptyList'

export function SectionMealList() {
  const { meal } = useMeal()
  const navigation = useNavigation()

  function handleOpenMeal(id: string) {
    navigation.navigate('meal', { mealId: id })
  }

  return (
    <SectionList
      sections={meal}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MealCard data={item} onPress={() => handleOpenMeal(item.id)} />
      )}
      renderSectionHeader={({ section }) => <S.Title>{section.title}</S.Title>}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyList />}
      contentContainerStyle={
        meal.length === 0 && { flex: 1, justifyContent: 'center' }
      }
    />
  )
}
