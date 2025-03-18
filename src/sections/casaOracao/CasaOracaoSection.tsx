import React, { useEffect, useState } from 'react'

import { CoordenadasList } from '@/src/sections/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { HeaderMenuCasaOracao } from '@/src/sections/casaOracao/components/HeaderMenuCasaOracao'
import { ModalFiltroCasaOracaoSection } from '@/src/sections/casaOracao/components/ModalFiltro'
import { CoordenadasSearch } from '@/src/sections/casaOracao/components/CoordenadasSearch'
import { ThemedText } from '@/src/components/ThemedText'
import { dataCoordenadas } from '../../api/dataCoordenadas'

export function TabCasaOracaoSection() {
  const [coordenadasSearch, setCoordenadasSearch] = useState<Coordenada[]>([])
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([])
  const [isMenu, setMenuVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const handleResetCoordenadas = () => {
    setCoordenadas(dataCoordenadas)
  }

  useEffect(() => {
    setCoordenadas(coordenadasSearch)
  }, [coordenadasSearch])

  return (
    <>
      <HeaderMenuCasaOracao
        setModalVisible={setModalVisible}
        isMenu={isMenu}
        setMenu={setMenuVisible}
        handleResetCoordenadas={handleResetCoordenadas}
      />

      <CoordenadasSearch setCoordenadas={setCoordenadas} coordenadasSearch={coordenadasSearch} />
      <ThemedText>{coordenadas?.length} casas de orações</ThemedText>
      <CoordenadasList coordenadas={coordenadas} />

      <ModalFiltroCasaOracaoSection
        open={modalVisible}
        setModalVisible={setModalVisible}
        setCoordenadasSearch={setCoordenadasSearch}
      />
    </>
  )
}
