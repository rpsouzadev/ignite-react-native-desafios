import * as S from './styles'
import { useEffect, useState } from 'react'
import { useMeal } from '@hooks/useMeal'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useTheme } from 'styled-components/native'
import { AlertModal } from '@components/AlertModal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { MealDTO } from '@dtos/MealDTO'

type RouteParams = {
  mealId: string
}

export function Meal() {
  const [mealById, setMealById] = useState<MealDTO>({} as MealDTO)
  const [showAlertModal, setShowAlertModal] = useState(false)

  const theme = useTheme()
  const route = useRoute()
  const { meal } = useMeal()
  const navigation = useNavigation()
  const { mealId } = route.params as RouteParams

  function fetchMealDataId() {
    try {
      const foundMealById = meal.find((meal) =>
        meal.data.find((data) => data.id === mealId),
      )?.data[0]

      if (foundMealById) {
        setMealById(foundMealById)
      }
    } catch (error) {
      console.log('fetchMealDataId =>', error)
    }
  }

  function handleOpenEditMeal() {
    navigation.navigate('edit')
  }

  function handleToggleModal() {
    setShowAlertModal(!showAlertModal)
  }

  function handleDeleteMeal() {
    console.log('delete')
  }

  useEffect(() => {
    fetchMealDataId()
  }, [mealId])

  return (
    <S.MealContainer>
      <Header
        title="Refeição"
        colorScheme={mealById.isWithinDiet ? 'GOOD' : 'BAD'}
      />

      <S.ContentContainer
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Title>{mealById.name}</S.Title>
        <S.Description>{mealById.description}</S.Description>

        <S.Label>Data e Hora</S.Label>
        <S.DateText>
          {mealById.date} às {mealById.time}
        </S.DateText>

        <S.Tag>
          <S.Status status={mealById.isWithinDiet ? 'primary' : 'secondary'} />
          <S.TagText>
            {mealById.isWithinDiet ? 'dentro da dieta' : 'fora da dieta'}
          </S.TagText>
        </S.Tag>

        <S.ButtonsWrapper>
          <Button
            title="Editar refeição"
            onPress={handleOpenEditMeal}
            Icon={
              <PencilSimpleLine
                color={theme.COLORS.WHITE}
                size={18}
                style={{ marginRight: 8 }}
              />
            }
          />

          <Button
            title="Editar refeição"
            variant="OUTLINE"
            onPress={handleToggleModal}
            Icon={
              <Trash
                color={theme.COLORS.GRAY_100}
                size={18}
                style={{ marginRight: 8 }}
              />
            }
          />
        </S.ButtonsWrapper>
      </S.ContentContainer>

      {showAlertModal && (
        <AlertModal
          visible={showAlertModal}
          onCancel={handleToggleModal}
          onConfirm={handleDeleteMeal}
        />
      )}
    </S.MealContainer>
  )
}
