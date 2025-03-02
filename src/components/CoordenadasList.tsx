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

interface Coordenada {
  nome: string
  latitude: number
  longitude: number
  atualizacao: string
}

interface Props {
  coordenadas: Coordenada[]
}

const CoordenadasList: React.FC<Props> = ({ coordenadas }) => {
  const abrirMapa = (latitude: number, longitude: number) => {
    const url = `geo:${latitude},${longitude}?q=${latitude},${longitude}`
    Linking.openURL(url)
  }

  const copiarCoordenada = async (latitude: number, longitude: number) => {
    const texto = `${latitude},${longitude}`
    await Clipboard.setStringAsync(texto)
    Toast.success('As coordenadas foram copiadas para a área de transferência.')
  }

  return (
    <FlatList
      data={coordenadas}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
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
              <Feather name="clipboard" size={24} color="#444" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3, // Sombra no Android
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
    gap: 15,
  },
})

export default CoordenadasList
