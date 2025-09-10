import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

import { serviceCoordenada } from '@/src/services/coordenada/coordenada.service'
import { Coordenada } from '../../../models/Coordenada'

interface Props {
  setCoordenadas: React.Dispatch<React.SetStateAction<Coordenada[]>>
}

export const BuscaRapidaSearch = ({ setCoordenadas }: Props) => {
  const changeSeach = async (nome: string) => {
    if (nome?.length > 1) {
      const response = await serviceCoordenada.searchLocalCity({
        search: nome,
      })

      setCoordenadas(response)
    }
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
