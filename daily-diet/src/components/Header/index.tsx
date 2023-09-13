import { StatusTypeProps } from '@components/Info/styles'
import * as S from './styles'

type HeaderProps = {
  title: string
  colorScheme?: StatusTypeProps
}

export function Header({ title, colorScheme = 'default' }: HeaderProps) {
  return (
    <S.HeaderContainer type={colorScheme}>
      <S.HeaderIcon />

      <S.Title>{title}</S.Title>
    </S.HeaderContainer>
  )
}
