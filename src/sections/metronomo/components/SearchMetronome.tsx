import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

import { serviceHino } from '@/src/services/hino/hino.service'
import { createDebounce } from '@/src/utils/debounce'
import { Hino } from '@/src/models/Hinos'

interface Props {
  setDataset: React.Dispatch<React.SetStateAction<Hino | undefined>>
}

export const SearchMetronome = ({ setDataset }: Props) => {
  const debouncedSearch = useCallback(
    createDebounce(async (hino: string) => {
      if (hino) {
        const response = await serviceHino.search({ hino: +hino })
        setDataset(response)
      }
    }, 500),
    [],
  )

  const changeSeach = async (hino: string) => {
    debouncedSearch(hino)
  }

  return (
    <View style={styles.container}>
      <TextInput keyboardType="numeric" style={styles.input} onChangeText={changeSeach} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  input: {
    marginVertical: 5,
    borderRadius: 5,
    width: 50,
    alignSelf: 'center',
  },
})
