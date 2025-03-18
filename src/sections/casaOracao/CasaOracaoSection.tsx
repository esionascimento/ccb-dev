import React, { useEffect, useState } from 'react'

import { CoordenadasList } from '@/src/sections/components/CoordenadasList'
import { Coordenada } from '@/src/models/Coordenada'
import { HeaderMenuCasaOracao } from '@/src/sections/casaOracao/components/HeaderMenuCasaOracao'
import { ModalFiltroCasaOracaoSection } from '@/src/sections/casaOracao/components/ModalFiltro'
import { CoordenadasSearch } from '@/src/sections/casaOracao/components/CoordenadasSearch'
import { ThemedText } from '@/src/components/ThemedText'
import { useConfiguracao } from '@/src/hooks/useConfiguracao'
import { serviceCoordenada } from '@/src/services/coordenada/coordenada.service'

export function TabCasaOracaoSection() {
  const config = useConfiguracao()
  const [coordenadasFixa, setCoordenadasFixa] = useState<Coordenada[]>([])
  const [coordenadasSearch, setCoordenadasSearch] = useState<Coordenada[]>([])
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([])
  const [isMenu, setMenuVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const handleResetCoordenadas = () => {
    loadCasas()
  }

  useEffect(() => {
    setCoordenadas(coordenadasSearch)
  }, [coordenadasSearch])

  const loadCasas = async () => {
    if (config?.endereco?.cidade) {
      const response = await serviceCoordenada.searchCityUf({
        cidade: config?.endereco?.cidade,
        uf: config?.endereco?.uf,
      })
      setCoordenadasFixa(response)
      setCoordenadas(response)
    }
  }

  useEffect(() => {
    loadCasas()
  }, [config?.endereco?.cidade])

  return (
    <>
      <HeaderMenuCasaOracao
        setModalVisible={setModalVisible}
        isMenu={isMenu}
        setMenu={setMenuVisible}
        handleResetCoordenadas={handleResetCoordenadas}
      />

      <CoordenadasSearch setCoordenadas={setCoordenadas} coordenadasSearch={coordenadasFixa} />
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
