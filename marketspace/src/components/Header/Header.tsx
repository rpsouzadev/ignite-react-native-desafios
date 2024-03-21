import { HStack, Heading, View, useTheme } from 'native-base'
import { ArrowLeft, Icon } from 'phosphor-react-native'

type HeaderProps = {
  title?: string
  icon?: Icon
}

export function Header({ title, icon: Icon }: HeaderProps) {
  const { colors } = useTheme()

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <ArrowLeft color={colors.gray[100]} size={24} />

      <Heading color="gray.100">{title}</Heading>

      <View>{Icon && <Icon color={colors.gray[100]} size={24} />}</View>
    </HStack>
  )
}
