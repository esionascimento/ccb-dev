import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Text } from 'react-native-paper'
import Feather from '@expo/vector-icons/Feather'

import { Coordenada } from '@/src/models/Coordenada'
import { copiarCoordenada } from '@/src/utils/copiarCoordenada'
import { abrirMapa } from '@/src/utils/abrirMapa'

type Props = {
  coordenada: Coordenada
}

export function CoordenadaHeader({ coordenada }: Props) {
  return (
    <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
      <View>
        <Text style={styles.titulo}>{coordenada.nome}</Text>
        {coordenada?.segundoNome && (
          <Text style={styles.subtitle}>{coordenada.segundoNome}</Text>
        )}
      </View>

      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() =>
            copiarCoordenada(coordenada.latitude, coordenada.longitude)
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Feather name="clipboard" size={24} color="#444" />
          <Text>Copiar coordenada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => abrirMapa(coordenada.latitude, coordenada.longitude)}
          style={styles.icon}
        >
          <Feather name="map-pin" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, marginTop: 8 },
  icons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  icon: {
    marginLeft: 15,
  },
})
