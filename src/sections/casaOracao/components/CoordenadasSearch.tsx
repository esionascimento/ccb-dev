import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Coordenada } from '../../../models/Coordenada'

interface Props {
  setCoordenadas: React.Dispatch<React.SetStateAction<Coordenada[]>>
  coordenadasSearch: Coordenada[]
}

export const CoordenadasSearch: React.FC<Props> = ({ setCoordenadas, coordenadasSearch }) => {
  const changeSeach = (text: string) => {
    const resultadosFiltrados = coordenadasSearch.filter((coordenada) =>
      coordenada?.nome.toLowerCase().includes(text.toLowerCase()),
    )

    setCoordenadas(resultadosFiltrados)
  }

  return (
    <View style={styles.container}>
      <TextInput label={'Nome do Local'} style={styles.input} onChangeText={changeSeach} />
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
