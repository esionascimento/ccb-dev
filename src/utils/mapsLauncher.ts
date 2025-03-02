import { Linking, Alert } from 'react-native'

export const abrirMapa = (latitude: number, longitude: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`

  Linking.openURL(url).catch(() =>
    Alert.alert('Erro', 'Nenhum app de mapas encontrado!'),
  )
}
