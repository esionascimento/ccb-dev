import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Coordenada } from '@/src/models/Coordenada'
import { CoordenadasList } from '../components/CoordenadasList'
import { BuscaRapidaSearch } from './components/BuscaRapidaSearch'

export const BuscaRapidaSection = () => {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([])

  return (
    <>
      <View style={styles.container}>
        <BuscaRapidaSearch setCoordenadas={setCoordenadas} />

        <CoordenadasList coordenadas={coordenadas} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
})
