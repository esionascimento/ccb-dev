import { Alert, Linking } from 'react-native'

export const abrirMapa = (latitude: number, longitude: number) => {
  const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
  const appleMapsURL = `maps://?q=${latitude},${longitude}`

  Linking.openURL(appleMapsURL).catch(() =>
    Linking.openURL(googleMapsURL).catch(() =>
      Alert.alert('Erro', 'Nenhum app de mapas encontrado!'),
    ),
  )
}
