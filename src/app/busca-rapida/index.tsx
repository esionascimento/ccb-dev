import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'

import { BuscaRapidaSection } from '@/src/sections/buscaRapida/BuscaRapidaSection'

export default function BuscaRapidaScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Busca Rápida',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <>
      <BuscaRapidaSection />
    </>
  )
}
