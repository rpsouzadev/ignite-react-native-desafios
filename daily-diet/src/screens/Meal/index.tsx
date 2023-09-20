import * as S from './styles'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useTheme } from 'styled-components/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AlertModal } from '@components/AlertModal'
import { useState } from 'react'

export function Meal() {
  const [showAlertModal, setShowAlertModal] = useState(false)
  const theme = useTheme()
  const navigation = useNavigation()

  function handleOpenEditMeal() {
    navigation.navigate('edit')
  }

  function handleDeleteMeal() {
    setShowAlertModal(true)
  }

  return (
    <S.MealContainer>
      <Header title="Refeição" />

      <S.ContentContainer
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Title>X-tudo</S.Title>
        <S.Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </S.Description>

        <S.Label>Data e Hora</S.Label>
        <S.DateText>12/08/2022 às 16:00</S.DateText>

        <S.Tag>
          <S.Status status="primary" />
          <S.TagText>dentro da dieta</S.TagText>
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
            onPress={handleDeleteMeal}
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

      {showAlertModal && <AlertModal />}
    </S.MealContainer>
  )
}
