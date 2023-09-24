import * as S from './styles'
import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { ButtonInOrOut } from '@components/ButtonInOrOut'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as yup from 'yup'
import { useMeal } from '@hooks/useMeal'

type FormDataProps = {
  name: string
  date: string
  time: string
  description: string
  isWithinDiet: boolean
}

const newMealSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  date: yup.string().required('Data obrigatória'),
  time: yup.string().required('Hora obrigatória'),
  isWithinDiet: yup.boolean().required('Selecione o status da dieta'),
})

export function NewMeal() {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const dateInputRef = useRef<TextInput>(null)
  const timeInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()
  const { saveMeal } = useMeal()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(newMealSchema),
  })

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker)
  }

  function handleAddNewMeal(data: FormDataProps) {
    // navigation.navigate('feedback')
    saveMeal(data)
  }

  return (
    <S.NewMealContainer>
      <Header title="Nova refeição" />

      <S.ContentContainer
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
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
                inputRef={dateInputRef}
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
                inputRef={timeInputRef}
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
                dateInputRef.current?.blur()
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
                timeInputRef.current?.blur()
                toggleTimePicker()
              }
            }}
          />
        )}

        <S.InOrOutContainer>
          <S.Label>Está dentro da dieta?</S.Label>
          <Controller
            control={control}
            name="isWithinDiet"
            render={({ field: { onChange, value } }) => (
              <S.InOrOutWrapper>
                <ButtonInOrOut
                  title="Sim"
                  status="primary"
                  type={value === true ? 'GOOD' : 'default'}
                  onPress={() => {
                    onChange(true)
                  }}
                />
                <ButtonInOrOut
                  title="Não"
                  status="secondary"
                  type={value === false ? 'BAD' : 'default'}
                  onPress={() => {
                    onChange(false)
                  }}
                />
              </S.InOrOutWrapper>
            )}
          />
          <S.ErrorMessage>{errors.isWithinDiet?.message}</S.ErrorMessage>
        </S.InOrOutContainer>

        <Button
          title="Cadastrar refeição"
          onPress={handleSubmit(handleAddNewMeal)}
        />
      </S.ContentContainer>
    </S.NewMealContainer>
  )
}
