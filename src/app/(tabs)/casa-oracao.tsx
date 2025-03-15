import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TabCasaOracaoSection } from '@/src/sections/casaOracao/CasaOracaoSection'

export default function TabCasaOracao() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Coordenadas</Text>

        <TabCasaOracaoSection />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
  },
})
