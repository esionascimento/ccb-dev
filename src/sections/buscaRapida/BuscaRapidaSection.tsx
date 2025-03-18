import { useState } from 'react'

import { Coordenada } from '@/src/models/Coordenada'
import { CoordenadasList } from '../components/CoordenadasList'
import { BuscaRapidaSearch } from './components/BuscaRapidaSearch'

export const BuscaRapidaSection = () => {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>([])

  return (
    <>
      <BuscaRapidaSearch setCoordenadas={setCoordenadas} />

      <CoordenadasList coordenadas={coordenadas} />
    </>
  )
}
