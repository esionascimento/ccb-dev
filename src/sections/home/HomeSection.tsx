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
        <ThemedText type="subtitle">Aplicativo não oficial</ThemedText>
        <ThemedText>Aplicativo com algumas informações, como coordenadas, ensaio, etc.</ThemedText>
        {config?.endereco?.cidade && <ThemedText>Cidade Padrão: {config?.endereco?.cidade} </ThemedText>}
      </ThemedView>

      <SearchHome />
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
})
