import * as S from './styles'
import { useState } from 'react'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DateTimePicker from '@react-native-community/datetimepicker'

type FormDataProps = {
  name: string
  description: string
  date: string
  time: string
}

const newMealSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  date: yup.string().required('Data obrigatória'),
  time: yup.string().required('Hora obrigatória'),
})

export function NewMeal() {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(newMealSchema),
  })

  function handleAddNewMeal(data: FormDataProps) {
    if (data) {
      console.log('data => ', data)
    } else {
      console.log('error => ', errors)
    }
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker)
  }

  return (
    <S.NewMealContainer>
      <Header title="Nova refeição" />

      <S.ContentContainer>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              title="Nome"
              size={48}
              value={value}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Input
              title="Descrição"
              size={120}
              value={value}
              textAlignVertical="top"
              onChangeText={onChange}
              errorMessage={errors.description?.message}
            />
          )}
        />

        <S.InputWrapper>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Data"
                size={48}
                value={value}
                flexNumber={1}
                onChangeText={onChange}
                openDatePicker={toggleDatePicker}
                errorMessage={errors.date?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Hora"
                size={48}
                value={value}
                flexNumber={1}
                onChangeText={onChange}
                openTimePicker={toggleTimePicker}
                errorMessage={errors.time?.message}
              />
            )}
          />
        </S.InputWrapper>

        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                const formattedDate = selectedDate.toLocaleDateString('pt-BR')
                setValue('date', formattedDate)
                toggleDatePicker()
              }
            }}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => {
              if (selectedTime) {
                const formattedTime = selectedTime.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                setValue('time', formattedTime)
                toggleTimePicker()
              }
            }}
          />
        )}

        <Button
          title="Cadastrar refeição"
          onPress={handleSubmit(handleAddNewMeal)}
        />
      </S.ContentContainer>
    </S.NewMealContainer>
  )
}
