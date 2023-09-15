import * as S from './styles'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@components/Button'

type FormDataProps = {
  name: string
  description: string
  date: string
  hour: string
}

const newMealSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  date: yup.string().required('Data obrigatória'),
  hour: yup.string().required('Hora obrigatória'),
})

export function NewMeal() {
  const { control, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(newMealSchema),
  })

  function handleAddNewMeal(data: FormDataProps) {
    console.log('data => ', data)
  }

  return (
    <S.NewMealContainer>
      <Header title="Nova refeição" />

      <S.ContentContainer>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input title="Nome" size={48} onChangeText={onChange} />
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
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="hour"
            render={({ field: { onChange } }) => (
              <Input
                title="Hora"
                size={48}
                flexNumber={1}
                onChangeText={onChange}
              />
            )}
          />
        </S.InputWrapper>

        <Button
          title="Cadastrar refeição"
          onPress={handleSubmit(handleAddNewMeal)}
        />
      </S.ContentContainer>
    </S.NewMealContainer>
  )
}
