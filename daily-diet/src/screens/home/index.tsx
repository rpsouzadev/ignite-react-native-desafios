import * as S from './styled'
import { Info } from '@components/Info'
import { HomeHeader } from '@components/HomeHeader'

export function Home() {
  return (
    <S.HomeContainer>
      <HomeHeader />

      <Info percentage="90,86%" />
    </S.HomeContainer>
  )
}
