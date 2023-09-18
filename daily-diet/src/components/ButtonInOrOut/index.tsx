import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { StatusTypeProps } from '@components/Info/styles'

type buttonInOrOutProps = TouchableOpacityProps & {
  title: string
  type?: StatusTypeProps
  status: 'primary' | 'secondary'
}

export function ButtonInOrOut({
  title,
  type = 'default',
  status,
  ...rest
}: buttonInOrOutProps) {
  return (
    <S.InOrOutContainer>
      <S.InOrOut type={type} activeOpacity={0.5} {...rest}>
        <S.Status status={status} />
        <S.Title>{title}</S.Title>
      </S.InOrOut>
    </S.InOrOutContainer>
  )
}
