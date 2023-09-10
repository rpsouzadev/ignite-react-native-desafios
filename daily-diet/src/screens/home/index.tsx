import * as S from './styled'
import { Info } from '@components/Info'
import { HomeHeader } from '@components/HomeHeader'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

export function Home() {
  const theme = useTheme()

  return (
    <S.HomeContainer>
      <HomeHeader />

      <Info percentage="90,86%" />

      <Button
        title="Nova Refeição"
        Icon={
          <Plus
            color={theme.COLORS.WHITE}
            size={18}
            style={{ marginRight: 8 }}
          />
        }
      />
    </S.HomeContainer>
  )
}
