import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, TextInput } from 'react-native-paper'

import { serviceHino } from '@/src/services/hino/hino.service'
import { createDebounce } from '@/src/utils/debounce'
import { Hino } from '@/src/models/Hinos'
import { ThemedText } from '@/src/components/ThemedText'

interface Props {
  setDataset: React.Dispatch<React.SetStateAction<Hino | undefined>>
}

export const SearchMetronome = ({ setDataset }: Props) => {
  const [value, setValue] = useState<string>('')
  const [checkedCoro, setCheckedCoro] = useState(false)

  const reqHino = async (hino: string, coro: boolean) => {
    const response = await serviceHino.search({ hino: +hino, coro })
    setDataset(response)
  }

  const debouncedSearch = useCallback(
    createDebounce(async (hino: string, coro: boolean) => {
      if (hino) {
        reqHino(hino, coro)
      }
    }, 500),
    [],
  )

  const changeSeach = async (hino: string, checkedCoro: boolean = false) => {
    if (!hino) return setValue('')
    if (+hino < 1) return
    if (+hino > 6 && checkedCoro) {
      setValue('6')
      return debouncedSearch('6', checkedCoro)
    }
    if (+hino > 480 && !checkedCoro) {
      setValue('480')
      return debouncedSearch('480', checkedCoro)
    }
    setValue(hino)
    debouncedSearch(hino, checkedCoro)
  }

  useEffect(() => {
    reqHino('1', checkedCoro)
    setValue('1')
  }, [])

  const validateHino = (hino: string, coro: boolean): string => {
    if (!hino || +hino < 1) return '1'
    if (+hino > 6 && coro) return '6'
    if (+hino > 480 && !coro) return '480'
    return hino
  }

  const handleSearch = (hino: string, coro: boolean) => {
    const validatedHino = validateHino(hino, coro)
    setValue(validatedHino)
    debouncedSearch(validatedHino, coro)
  }

  const toggleCoro = () => {
    setCheckedCoro((prev) => {
      const newChecked = !prev
      handleSearch(value, newChecked)
      return newChecked
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <Checkbox status={checkedCoro ? 'checked' : 'unchecked'} onPress={toggleCoro} />
        <ThemedText>Coro</ThemedText>
      </View>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={value}
        onChangeText={(value) => {
          setCheckedCoro((prev) => {
            changeSeach(value, prev)
            return prev
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  input: {
    marginVertical: 5,
    borderRadius: 5,
    width: 60,
    alignSelf: 'center',
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
