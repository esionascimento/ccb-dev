import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import CoordenadasForm from '@/src/components/CoordenadasForm'
import CoordenadasList from '@/src/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { HeaderMenuCasaOracao } from '@/src/sections/casaOracao/components/HeaderMenuCasaOracao'
import { ModalFiltroCasaOracao } from '@/src/sections/casaOracao/components/ModalFiltro'
import { mockCoordenadas } from '../../mock/mockCoordenadas'

export default function TabCasaOracao() {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>(mockCoordenadas)
  const [isMenu, setMenuVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const adicionarCoordenada = (coordenada: Coordenada) => {
    setCoordenadas([...coordenadas, coordenada])
  }

  const handleResetCoordenadas = () => {
    setCoordenadas(mockCoordenadas)
  }

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

        {/* <CoordenadasForm onAdicionar={adicionarCoordenada} /> */}
        <CoordenadasList coordenadas={coordenadas} />
      </View>

      <ModalFiltroCasaOracao
        open={modalVisible}
        setModalVisible={setModalVisible}
        coordenadas={coordenadas}
        setCoordenadas={setCoordenadas}
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
