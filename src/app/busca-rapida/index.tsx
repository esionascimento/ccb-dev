import { StyleSheet, View } from 'react-native'

import { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-paper'

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
      <View style={styles.container}>
        <TextInput label={'Nome do Local'} style={styles.input} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  input: {
    marginVertical: 5,
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
