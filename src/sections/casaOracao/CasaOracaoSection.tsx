import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import CoordenadasList from '@/src/sections/casaOracao/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { HeaderMenuCasaOracao } from '@/src/sections/casaOracao/components/HeaderMenuCasaOracao'
import { ModalFiltroCasaOracaoSection } from '@/src/sections/casaOracao/components/ModalFiltro'
import { CoordenadasSearch } from '@/src/sections/casaOracao/components/CoordenadasSearch'
import { mockCoordenadas } from '../../mock/mockCoordenadas'

export function TabCasaOracaoSection() {
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
      <View>
        <HeaderMenuCasaOracao
          setModalVisible={setModalVisible}
          isMenu={isMenu}
          setMenu={setMenuVisible}
          handleResetCoordenadas={handleResetCoordenadas}
        />

        <CoordenadasSearch setCoordenadas={setCoordenadas} coordenadasSearch={coordenadasSearch} />
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
