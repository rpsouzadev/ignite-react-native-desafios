import * as S from './styled'
import LogoImg from '@assets/logo.png'

export function HomeHeader() {
  return (
    <S.HomeHeaderContainer>
      <S.Logo source={LogoImg} alt="Daily diet" />

      <S.AvatarEllipse>
        <S.Avatar
          source={{ uri: 'https://github.com/muglly.png' }}
          alt="user image"
        />
      </S.AvatarEllipse>
    </S.HomeHeaderContainer>
  )
}
