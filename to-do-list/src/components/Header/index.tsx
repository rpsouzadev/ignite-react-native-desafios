import * as S from './styled'
import ImageLogo from '../../assets/Logo.png'

export default function Header() {
  return (
    <S.Container>
      <S.Logo source={ImageLogo} alt="To-do" />
    </S.Container>
  )
}
