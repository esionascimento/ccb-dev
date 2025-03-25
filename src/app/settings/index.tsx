import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { ConfiguracaoSection } from '@/src/sections/settings/ConfiguracaoSection'

export default function ConfiguracaoScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Configuração',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <View style={styles.container}>
      <ConfiguracaoSection />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 8 },
})
