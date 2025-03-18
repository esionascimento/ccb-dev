import React, { useState, useEffect, useRef } from 'react'
import { View, Button, Vibration } from 'react-native'
import { Audio } from 'expo-av'
import { ThemedText } from '@/src/components/ThemedText'
import { Toast } from 'toastify-react-native'
import { Slider } from '@/src/components/Slider'

export const MetronomoSection = () => {
  const [bpm, setBpm] = useState<number>(60)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [useVibration, setUseVibration] = useState<boolean>(false)
  const soundRef = useRef<Audio.Sound | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/sons/metronome.mp3'))
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

  useEffect(() => {
    if (isPlaying) {
      try {
        playSound()
      } catch (error) {
        console.log('Error 834:')
      }

      intervalRef.current = setInterval(() => {
        playSound()
      }, (60 / bpm) * 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (soundRef.current) {
        soundRef.current.stopAsync()
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, bpm, useVibration])

  return (
    <View style={{ padding: 20 }}>
      <View>
        <ThemedText>BPM: {bpm}</ThemedText>
        <Slider
          minimumValue={30}
          maximumValue={240}
          step={1}
          value={bpm}
          onValueChange={(value: number) => setBpm(value)}
          // minimumTrackTintColor="#FFFFFF"
          // maximumTrackTintColor="#000000"
        />
      </View>

      <View>
        <Button title={isPlaying ? 'Parar' : 'Iniciar'} onPress={() => setIsPlaying((prev) => !prev)} />
        <View style={{ marginTop: 3 }} />
        <Button title={useVibration ? 'Som' : 'Vibração'} onPress={() => setUseVibration((prev) => !prev)} />
      </View>
    </View>
  )
}
