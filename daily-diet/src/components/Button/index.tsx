import { ReactNode } from 'react'
import * as S from './styled'
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: S.ButtonVariants
  Icon?: ReactNode
}

export function Button({
  title,
  variant = 'SOLID',
  Icon,
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonContainer activeOpacity={0.5} variant={variant} {...rest}>
      {Icon}
      <S.Title variant={variant}>{title}</S.Title>
    </S.ButtonContainer>
  )
}
