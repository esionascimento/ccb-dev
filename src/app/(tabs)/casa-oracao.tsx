import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import CoordenadasList from '@/src/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { HeaderMenuCasaOracao } from '@/src/sections/casaOracao/components/HeaderMenuCasaOracao'
import { ModalFiltroCasaOracaoSection } from '@/src/sections/casaOracao/components/ModalFiltro'
import { CoordenadasSearch } from '@/src/components/CoordenadasSearch'
import { mockCoordenadas } from '../../mock/mockCoordenadas'

export default function TabCasaOracao() {
  const [coordenadasSearch, setCoordenadasSearch] = useState<Coordenada[]>(mockCoordenadas)
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([])
  const [isMenu, setMenuVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const handleResetCoordenadas = () => {
    setCoordenadas(mockCoordenadas)
  }

  useEffect(() => {
    setCoordenadas(coordenadasSearch)
  }, [coordenadasSearch])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Coordenadas</Text>
        <HeaderMenuCasaOracao
          setModalVisible={setModalVisible}
          isMenu={isMenu}
          setMenu={setMenuVisible}
          handleResetCoordenadas={handleResetCoordenadas}
        />

        <CoordenadasSearch
          setCoordenadas={setCoordenadas}
          handleResetCoordenadas={handleResetCoordenadas}
          coordenadasSearch={coordenadasSearch}
        />
        <CoordenadasList coordenadas={coordenadas} />
      </View>

      <ModalFiltroCasaOracaoSection
        open={modalVisible}
        setModalVisible={setModalVisible}
        setCoordenadasSearch={setCoordenadasSearch}
      />
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, padding: 8 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
  },
})
