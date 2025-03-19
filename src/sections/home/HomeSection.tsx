import { StyleSheet, View } from 'react-native'

import { useConfiguracao } from '@/src/hooks/useConfiguracao'
import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { SearchHome } from './components/search/SearchHome'

export function HomeSection() {
  const config = useConfiguracao()

  return (
    <View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Aplicativo independente e não oficial.</ThemedText>
        <ThemedText>- Aplicativo que disponibiliza informações como coordenadas, ensaios e outros dados.</ThemedText>
        <ThemedText>- Não possui nenhum vínculo com a Congregação Cristã no Brasil.</ThemedText>
      </ThemedView>

      <SearchHome />
      {config?.endereco?.cidade && <ThemedText>Cidade Padrão: {config?.endereco?.cidade} </ThemedText>}
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
})
