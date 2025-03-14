import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Fontisto from '@expo/vector-icons/Fontisto'
import { Text } from 'react-native-paper'
import { router } from 'expo-router'

import { useIsDark } from '@/src/hooks/useIsDark'
import { useAppTheme } from '@/src/app/_layout'

type Props = {
  setOpcao: any
}

export function SearchHome({ setOpcao }: Props) {
  const theme = useAppTheme()
  const isDark = useIsDark()

  return (
    <View>
      <View style={styles.gridContainer}>
        <TouchableOpacity
          onPress={() => router.push(`/busca-rapida`)}
          style={{
            ...styles.button,
            backgroundColor: theme.colors.buttonBackground,
            borderColor: theme.colors.secondary,
          }}
        >
          <AntDesign name="search1" size={30} color={isDark ? 'white' : 'black'} />
          <Text style={styles.buttonText}>Procura Rápida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled
          style={{
            ...styles.button,
            backgroundColor: theme.colors.buttonBackground,
            borderColor: theme.colors.secondary,
          }}
          onPress={() => setOpcao('Busca Geográfica')}
        >
          <Fontisto name="world-o" size={30} color={isDark ? 'white' : 'black'} />
          <Text style={styles.buttonText}>Busca Geográfica</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'silver',
    padding: 10,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  buttonText: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
