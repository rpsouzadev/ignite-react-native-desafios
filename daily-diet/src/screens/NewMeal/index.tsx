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
  date: Date
  time: Date
}

const newMealSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  date: yup.date().required('Data obrigatória'),
  time: yup.date().required('Hora obrigatória'),
})

export function NewMeal() {
  const [selectDate, setSelectDate] = useState<Date>()
  const [selectTime, setSelectTime] = useState<Date>()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const {
    control,
    handleSubmit,
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

  return (
    <S.NewMealContainer>
      <Header title="Nova refeição" />

      <S.ContentContainer>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              title="Nome"
              size={48}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange } }) => (
            <Input
              title="Descrição"
              size={120}
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
            render={({ field: { onChange } }) => (
              <Input
                title="Data"
                size={48}
                flexNumber={1}
                openDatePicker={() => setShowDatePicker(true)}
                value={selectDate ? selectDate.toDateString() : ''}
                onChangeText={onChange}
                errorMessage={errors.date?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange } }) => (
              <Input
                title="Hora"
                size={48}
                flexNumber={1}
                openTimePicker={() => setShowTimePicker(true)}
                value={selectTime ? selectTime.toLocaleTimeString() : ''}
                onChangeText={onChange}
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
                setSelectDate(selectedDate)
                setShowDatePicker(false)
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
                setSelectTime(selectedTime)
                setShowTimePicker(false)
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
