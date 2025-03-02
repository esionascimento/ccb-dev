import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native'

import CoordenadasForm from '@/src/components/CoordenadasForm'
import CoordenadasList from '@/src/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'

export default function TabTwoScreen() {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([
    {
      nome: 'CCB Tancredo Neves',
      latitude: -8.760491,
      longitude: -63.835211,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Cascalheira(Flamboyant)',
      latitude: -8.778104,
      longitude: -63.837291,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Paraiso das Acácias',
      latitude: -8.77895,
      longitude: -63.596662,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Estrada da Aliança',
      latitude: -8.642954,
      longitude: -63.611601,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Ramal Bom Jesus',
      latitude: -8.831721,
      longitude: -63.781003,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB KM 13',
      latitude: -8.805448,
      longitude: -63.777817,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Candeias Central',
      latitude: -8.795603,
      longitude: -63.700311,
      atualizacao: '26/02/2025',
    },
    {
      nome: 'CCB Candeias Santa Letícia',
      latitude: -8.787536,
      longitude: -63.690464,
      atualizacao: '26/02/2025',
    },
  ])

  const adicionarCoordenada = (coordenada: Coordenada) => {
    setCoordenadas([...coordenadas, coordenada])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Lista de Coordenadas</Text>
      <CoordenadasForm onAdicionar={adicionarCoordenada} />
      <CoordenadasList coordenadas={coordenadas} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
})
