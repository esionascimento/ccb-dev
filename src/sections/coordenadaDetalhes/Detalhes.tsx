import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

import { InfoText } from '@/src/sections/casaOracao/components/InfoText'
import { CoordenadaLocalizacao } from './components/Localizacao'
import { CoordenadaDiasCulto } from './components/DiasCulto'
import { mockCoordenadas } from '../../mock/mockCoordenadas'
import { CoordenadaHeader } from './components/Header'

export function CoordenadaDetalhesSection() {
  const { id } = useLocalSearchParams()
  const coordenada = mockCoordenadas.find((coord) => coord.id === id)
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: coordenada ? coordenada.nome : 'Detalhes',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [navigation, coordenada])

  if (!coordenada) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>Coordenada não encontrada.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CoordenadaHeader coordenada={coordenada} />

      <CoordenadaLocalizacao coordenada={coordenada} />

      <CoordenadaDiasCulto coordenada={coordenada} />

      <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
        <Text style={styles.titulo}>Informações Adicionais</Text>
        <InfoText
          label="Última atualização"
          value={coordenada.atualizacao}
          labelStyle={{ color: 'red' }}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  erro: { fontSize: 18, color: 'red' },
})
