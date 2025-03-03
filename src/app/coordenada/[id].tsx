import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

import { mockCoordenadas } from '../../mock/mockCoordenadas'
import { InfoText } from '@/src/sections/casaOracao/components/InfoText'

export default function CoordenadaDetalhes() {
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
      <View>
        <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
          <Text style={styles.titulo}>Localização</Text>
          <View>
            <InfoText
              label="Logradouro"
              value={coordenada.endereco?.logradouro}
            />
            <InfoText label="CEP" value={coordenada.endereco?.cep} />
            <InfoText label="Cidade" value={coordenada.endereco?.cidade} />
            <InfoText label="Latitude" value={coordenada.latitude} />
            <InfoText label="Longitude" value={coordenada.longitude} />
            <InfoText
              label="Última atualização"
              value={coordenada.atualizacao}
              labelStyle={{ color: 'red' }}
            />
          </View>
        </Card>
      </View>
      <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
        <Text style={styles.titulo}>Dias de Culto</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 8,
  },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 16 },
  erro: { fontSize: 18, color: 'red' },
})
