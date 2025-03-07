import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

import { InfoText } from '@/src/sections/casaOracao/components/InfoText'
import { enums } from '@/src/enum'
import { mockCoordenadas } from '../../mock/mockCoordenadas'
import { CoordenadaLocalizacao } from './components/Localizacao'
import { CoordenadaDiasCulto } from './components/DiasCulto'

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
      <View>
        <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
          <Text style={styles.titulo}>{coordenada.nome}</Text>
        </Card>
      </View>

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
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, marginTop: 8 },
  texto: { fontSize: 16 },
  erro: { fontSize: 18, color: 'red' },
  space: { marginTop: 8, marginBottom: 8 },
})
