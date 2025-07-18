import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'
import { Card, Text } from 'react-native-paper'

import { copiarCoordenada } from '../../utils/copiarCoordenada'
import { Coordenada } from '../../models/Coordenada'
import { abrirMapa } from '../../utils/abrirMapa'

interface Props {
  coordenadas: Coordenada[]
}

export const CoordenadasList: React.FC<Props> = ({ coordenadas }) => {
  return (
    <FlatList
      data={coordenadas}
      keyExtractor={(_item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/coordenada/${item.id}`)}>
          <Card style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.coordenadas}>
                Lat: {item.latitude}, Lon: {item.longitude}
              </Text>
              <Text style={styles.atualizacao}>Cidade: {item.endereco?.cidade}</Text>
              <Text style={styles.atualizacao}>Última atualização: {item.atualizacao}</Text>
            </View>

            <View style={styles.icons}>
              {item?.latitude ? (
                <TouchableOpacity
                  onPress={() => copiarCoordenada(item.latitude, item.longitude)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  disabled={!item?.latitude}
                >
                  <Feather name="clipboard" size={24} color="#444" />
                  <Text>Copiar coordenada</Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
              <TouchableOpacity
                onPress={() =>
                  abrirMapa({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    endereco: `${item?.endereco?.logradouro},${item?.endereco?.numero},${item?.endereco?.cidade}`,
                  })
                }
                style={styles.icon}
              >
                <Feather name="map-pin" size={24} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coordenadas: {
    fontSize: 14,
  },
  atualizacao: {
    fontSize: 12,
    color: '#888',
  },
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
