import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { MetronomoSection } from '@/src/sections/metronomo/MetronomoSection'

export default function ConfiguracaoScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Metrónomo',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <View style={styles.container}>
      <MetronomoSection />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 8 },
})
