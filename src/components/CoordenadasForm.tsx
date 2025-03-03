import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
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
      id: '1231',
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
        label={'Nome do Local'}
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        label={'Latitude'}
        style={styles.input}
        keyboardType="numeric"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        label={'Longitude'}
        style={styles.input}
        keyboardType="numeric"
        value={longitude}
        onChangeText={setLongitude}
      />
      <Button title="Adicionar Coordenada" onPress={adicionarCoordenada} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  input: {
    marginVertical: 5,
    borderRadius: 5,
  },
})

export default CoordenadasForm
