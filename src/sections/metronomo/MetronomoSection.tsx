import React, { useState, useEffect, useRef, useMemo } from 'react'
import { View, Button, Vibration, StyleSheet } from 'react-native'
import { Audio } from 'expo-av'
import { Toast } from 'toastify-react-native'

import { ThemedText } from '@/src/components/ThemedText'
import { Slider } from '@/src/components/Slider'
import { Hino } from '@/src/models/Hinos'
import { SearchMetronome } from './components/SearchMetronome'

export const MetronomoSection = () => {
  const [bpm, setBpm] = useState<number>(60)
  const [bpm2, setBpm2] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [useVibration, setUseVibration] = useState<boolean>(false)
  const [dataset, setDataset] = useState<Hino>()
  const soundRef = useRef<Audio.Sound | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/sons/metronome.wav'))
    soundRef.current = sound
  }

  useEffect(() => {
    try {
      loadSound()
    } catch (error) {
      Toast.error('Error 23:')
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync()
      }
    }
  }, [])

  const playSound = async () => {
    if (useVibration) {
      Vibration.vibrate(100)
    } else {
      if (soundRef.current) {
        await soundRef.current.stopAsync()
        await soundRef.current.replayAsync()
      }
    }
  }

  const startMetronome = () => {
    const interval = (60 / bpm) * 1000
    startTimeRef.current = Date.now()

    const tick = () => {
      if (!isPlaying) return

      const now = Date.now()
      const elapsed = now - startTimeRef.current!
      const nextTick = interval - (elapsed % interval)

      playSound()

      timeoutRef.current = setTimeout(tick, nextTick)
    }

    tick()
  }

  useEffect(() => {
    if (isPlaying) {
      startMetronome()
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      if (soundRef.current) {
        soundRef.current.stopAsync()
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [isPlaying, bpm, useVibration])

  const ritmoMedio = useMemo(() => {
    if (dataset) {
      setIsPlaying(false)
      setUseVibration(false)
      const media = Math.ceil((dataset?.tempo?.max + dataset?.tempo?.min) / 2)
      setBpm(media)
      setBpm2(media)
      return media
    }
  }, [dataset])

  const simboloNota = useMemo(() => {
    switch (dataset?.tempo?.nota) {
      case 'unicodeNoteQuarterUp':
        return '𝅘𝅥'
      case 'unicodeNote8thUp':
        return '𝅘𝅥𝅮'
      case 'unicodeNoteHalfUp':
        return '𝅗𝅥'
      default:
        return ''
    }
  }, [dataset])

  return (
    <View>
      <View>
        <SearchMetronome setDataset={setDataset} />
        <ThemedText style={styles.textTitle}>{dataset?.title}</ThemedText>
        <View style={styles.row}>
          <ThemedText style={styles.textSubtitle}>Compasso: </ThemedText>
          <ThemedText>
            {dataset?.compasso?.num}/{dataset?.compasso?.den}
          </ThemedText>
        </View>

        <View style={styles.row}>
          <ThemedText style={styles.textSubtitle}>Velocidade: </ThemedText>
          <ThemedText>(</ThemedText>
          <ThemedText style={styles.nota}>{simboloNota} </ThemedText>
          <ThemedText>
            = {dataset?.tempo?.min} - {dataset?.tempo?.max})
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.textSubtitle}>Ritmo médio: </ThemedText>
          <ThemedText>{ritmoMedio}</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.textSubtitle}>BPM: </ThemedText>
          <ThemedText>{bpm}</ThemedText>
        </View>
      </View>

      <View style={styles.slider}>
        <ThemedText style={styles.textSlider}>{dataset?.tempo?.min}</ThemedText>
        <Slider
          style={{ width: '80%' }}
          minimumValue={dataset?.tempo?.min || 0}
          maximumValue={dataset?.tempo?.max || 100}
          step={1}
          value={bpm2}
          onValueChange={(value: number) => setBpm(value)}
        />
        <ThemedText style={styles.textSlider}>{dataset?.tempo?.max}</ThemedText>
      </View>

      <View>
        <Button title={isPlaying ? 'Parar' : 'Iniciar'} onPress={() => setIsPlaying((prev) => !prev)} />
        <View style={{ marginTop: 3 }} />
        <Button title={useVibration ? 'Som' : 'Vibração'} onPress={() => setUseVibration((prev) => !prev)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle: { alignSelf: 'center', fontSize: 18, marginBottom: 30, fontWeight: 500 },
  input: {
    marginVertical: 5,
    borderRadius: 5,
    width: 50,
    alignSelf: 'center',
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
  },
  textSlider: {
    width: '10%',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  textSubtitle: {
    fontSize: 18,
  },
  nota: {
    lineHeight: 30,
    fontSize: 20,
  },
})
