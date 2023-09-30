import * as S from './styles'
import { useState } from 'react'
import { useMeal } from '@hooks/useMeal'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useTheme } from 'styled-components/native'
import { AlertModal } from '@components/AlertModal'
import { useNavigation } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

export function Meal() {
  const [showAlertModal, setShowAlertModal] = useState(false)

  const theme = useTheme()
  const navigation = useNavigation()
  const { mealById, removeMeal } = useMeal()

  function handleOpenEditMeal() {
    navigation.navigate('edit')
  }

  function handleToggleModal() {
    setShowAlertModal(!showAlertModal)
  }

  async function handleDeleteMeal() {
    try {
      await removeMeal(mealById.id)
      navigation.navigate('home')
    } catch (error) {
      console.log('handleDeleteMeal => ', error)
    }
  }

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
            title="Excluir refeição"
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
