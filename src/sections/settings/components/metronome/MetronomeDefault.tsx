import { useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { View } from 'react-native'

import { storageService } from '@/src/services/storageService'
import { Metronome } from '@/src/services/storage.interface'
import { ThemedText } from '@/src/components/ThemedText'

export const MetronomeDefault = () => {
  const [selected, setSelected] = useState<Metronome>('med')

  useEffect(() => {
    ;(async () => {
      const configuracao = await storageService.get('configuracao')

      if (configuracao?.metronome) {
        setSelected(configuracao.metronome)
      }
    })()
  }, [])

  const options = [
    { label: 'Mínimo', value: 'min' },
    { label: 'Médio', value: 'med' },
    { label: 'Máximo', value: 'max' },
  ]

  const handleMetronome = async (value: Metronome) => {
    setSelected(value)
    await storageService.save('configuracao', {
      metronome: value,
    })
  }

  return (
    <>
      <ThemedText>Metrônomo:</ThemedText>
      <View style={{ marginTop: 2 }}>
        <View style={{ display: 'flex', gap: '8px' }}>
          {options.map((option) => (
            <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                status={selected === option.value ? 'checked' : 'unchecked'}
                onPress={() => handleMetronome(option.value as Metronome)}
              />
              <ThemedText>{option.label}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}
