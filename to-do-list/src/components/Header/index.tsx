import * as S from './styled'
import ImageLogo from '../../assets/Logo.png'

export function Header() {
  return (
    <S.Container>
      <S.Logo source={ImageLogo} alt="To-do" />
    </S.Container>
  )
}
