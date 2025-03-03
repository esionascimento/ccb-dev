import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import * as Clipboard from 'expo-clipboard'
import { Toast } from 'toastify-react-native'
import { router } from 'expo-router'

import { Coordenada } from '../models/Coordenada'

interface Props {
  coordenadas: Coordenada[]
}

const CoordenadasList: React.FC<Props> = ({ coordenadas }) => {
  const abrirMapa = (latitude: number, longitude: number) => {
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    const appleMapsURL = `maps://?q=${latitude},${longitude}`

    Linking.openURL(googleMapsURL).catch(() =>
      Linking.openURL(appleMapsURL).catch(() =>
        Alert.alert('Erro', 'Nenhum app de mapas encontrado!'),
      ),
    )
  }

  const copiarCoordenada = async (latitude: number, longitude: number) => {
    const texto = `${latitude},${longitude}`
    await Clipboard.setStringAsync(texto)
    Toast.success('Coordenadas copiadas!')
  }

  return (
    <FlatList
      data={coordenadas}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/coordenada/${item.id}`)}
        >
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.coordenadas}>
              Lat: {item.latitude}, Lon: {item.longitude}
            </Text>
            <Text style={styles.atualizacao}>
              Última atualização: {item.atualizacao}
            </Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => abrirMapa(item.latitude, item.longitude)}
            >
              <Feather name="map-pin" size={24} color="#007AFF" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => copiarCoordenada(item.latitude, item.longitude)}
            >
              <Feather
                name="clipboard"
                size={24}
                color="#444"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
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
    color: '#666',
  },
  atualizacao: {
    fontSize: 12,
    color: '#888',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
})

export default CoordenadasList
