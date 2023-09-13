import * as S from './styles'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusTypeProps } from '@components/Info/styles'

type HeaderProps = {
  title: string
  colorScheme?: StatusTypeProps
}

export function Header({ title, colorScheme = 'default' }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <S.HeaderContainer type={colorScheme}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleGoBack}>
        <S.HeaderIcon />
      </TouchableOpacity>

      <S.Title>{title}</S.Title>
    </S.HeaderContainer>
  )
}
