import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'

import { ConfiguracaoSection } from '@/src/sections/configuracao/ConfiguracaoSection'

export default function ConfiguracaoScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Configuração',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <>
      <ConfiguracaoSection />
    </>
  )
}
