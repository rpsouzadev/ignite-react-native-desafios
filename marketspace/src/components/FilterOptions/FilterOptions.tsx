import { Box, Checkbox, Switch, Text, VStack, useTheme } from 'native-base'
import { paymentMethod } from '@/utils/paymentMethod/paymentMethod'

export function FilterOptions() {
  const { colors } = useTheme()

  return (
    <VStack mt={6} mb={16}>
      <Text fontFamily="heading" fontSize="sm">
        Aceita troca?
      </Text>

      <Switch size="lg" w={12} />

      <Text fontFamily="heading" fontSize="sm" mb={3}>
        Meios de pagamento aceitos
      </Text>

      {paymentMethod.map((method) => (
        <Checkbox
          key={method.value}
          value={method.value}
          my={1}
          _text={{
            color: 'gray.200',
            fontSize: 'md',
          }}
          _checked={{
            bg: 'blue.400',
            borderColor: 'blue.400',
          }}
        >
          {method.name}
        </Checkbox>
      ))}
    </VStack>
  )
}
