import { TaskProps } from '../../screens/Home'
import { useMemo } from 'react'
import * as S from './styles'

type InfoProps = {
  data: TaskProps[]
}

export function Info({ data }: InfoProps) {
  const checkedTasksCounter = useMemo(() => {
    const filterCompletedTasks = data.filter(
      (task) => task.isChecked === 'isCHECK',
    )

    return filterCompletedTasks.length
  }, [data])
  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoText type="BLUE">Criadas</S.InfoText>

        <S.InfoCount>{data.length}</S.InfoCount>
      </S.InfoWrap>

      <S.InfoWrap>
        <S.InfoText type="PURPLE">Concluídas</S.InfoText>

        <S.InfoCount>{checkedTasksCounter}</S.InfoCount>
      </S.InfoWrap>
    </S.Container>
  )
}
