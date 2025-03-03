import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import CoordenadasForm from '@/src/components/CoordenadasForm'
import CoordenadasList from '@/src/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { mockCoordenadas } from '../../mock/mockCoordenadas'

export default function TabTwoScreen() {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>(mockCoordenadas)

  const adicionarCoordenada = (coordenada: Coordenada) => {
    setCoordenadas([...coordenadas, coordenada])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Coordenadas</Text>
        <CoordenadasForm onAdicionar={adicionarCoordenada} />
        <CoordenadasList coordenadas={coordenadas} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
})
