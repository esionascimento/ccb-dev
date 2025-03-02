import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { Coordenada } from '../models/Coordenada'

interface Props {
  onAdicionar: (coordenada: Coordenada) => void
}

const CoordenadasForm: React.FC<Props> = ({ onAdicionar }) => {
  const [nome, setNome] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const adicionarCoordenada = () => {
    const lat = parseFloat(latitude)
    const lon = parseFloat(longitude)

    if (!nome || isNaN(lat) || isNaN(lon)) return

    onAdicionar({
      nome,
      latitude: lat,
      longitude: lon,
      atualizacao: new Date().toLocaleDateString(),
    })

    setNome('')
    setLatitude('')
    setLongitude('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Local"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        keyboardType="numeric"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        keyboardType="numeric"
        value={longitude}
        onChangeText={setLongitude}
      />
      <Button title="Adicionar Coordenada" onPress={adicionarCoordenada} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
})

export default CoordenadasForm
