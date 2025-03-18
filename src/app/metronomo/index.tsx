import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'

import { MetronomoSection } from '@/src/sections/metronomo/MetronomoSection'

export default function ConfiguracaoScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Metrónomo',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }, [])

  return (
    <>
      <MetronomoSection />
    </>
  )
}
