import * as S from './styles'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Info } from '../../components/Info'
import { TaskCard } from '../../components/TaskCard'
import { TaskEmpty } from '../../components/TaskEmpty'
import { useTask } from './useTask'
import { Loading } from '../../components/Loading'

export function Home() {
  const {
    task,
    newTask,
    saveText,
    newTaskInputRef,
    handleAddNewTask,
    handleRemoveTask,
    handleToggleCheck,
    isLoadingTaskStorageData,
  } = useTask()

  return (
    <>
      {isLoadingTaskStorageData ? (
        <Loading />
      ) : (
        <S.Container>
          <Header />

          <S.WrapContent>
            <S.InputContainer>
              <Input
                value={newTask}
                autoCorrect={false}
                inputRef={newTaskInputRef}
                onChangeText={(text) => saveText(text)}
              />
              <Button onPress={handleAddNewTask} />
            </S.InputContainer>

            <Info data={task} />

            <FlatList
              data={task}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskCard
                  data={item}
                  toggleCheck={() => handleToggleCheck(item.id, item.isChecked)}
                  onRemove={() => handleRemoveTask(item.id)}
                />
              )}
              contentContainerStyle={{
                paddingBottom: 100,
              }}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => <TaskEmpty />}
            />
          </S.WrapContent>
        </S.Container>
      )}
    </>
  )
}
