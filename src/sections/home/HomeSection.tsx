import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { SearchHome } from './components/search/SearchHome'

export function HomeSection() {
  const [opcao, setOpcao] = useState<string | null>(null)

  return (
    <View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Aplicativo não oficial</ThemedText>
        <ThemedText>Aplicativo com algumas informações, como coordenadas, ensaio, etc.</ThemedText>
      </ThemedView>

      <SearchHome setOpcao={setOpcao} />
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
})
