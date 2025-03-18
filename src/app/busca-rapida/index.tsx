import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { BuscaRapidaSection } from '@/src/sections/buscaRapida/BuscaRapidaSection'

export default function BuscaRapidaScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Busca Rápida',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <View style={styles.container}>
      <BuscaRapidaSection />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 8 },
})
