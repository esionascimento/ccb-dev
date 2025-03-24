import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
// import Fontisto from '@expso/vector-icons/Fontisto'
import { Text } from 'react-native-paper'
import { router } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { useIsDark } from '@/src/hooks/useIsDark'
import { useAppTheme } from '@/src/app/_layout'
import { PATH } from '@/src/constants/routes'

export function SearchHome() {
  const theme = useAppTheme()
  const isDark = useIsDark()

  return (
    <View>
      <View style={styles.gridContainer}>
        <TouchableOpacity
          onPress={() => router.push(PATH.buscaRapida)}
          style={{
            ...styles.button,
            backgroundColor: theme.colors.buttonBackground,
            borderColor: theme.colors.secondary,
          }}
        >
          <AntDesign name="search1" size={30} color={isDark ? 'white' : 'black'} />
          <Text style={styles.buttonText}>Procura Rápida</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: theme.colors.buttonBackground,
            borderColor: theme.colors.secondary,
          }}
          onPress={() => router.push(PATH.metronomo)}
        >
          <MaterialCommunityIcons name="metronome" size={30} color={isDark ? 'white' : 'black'} />
          <Text style={styles.buttonText}>Metrônomo</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
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
