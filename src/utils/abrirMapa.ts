import { Linking, Alert, Platform } from 'react-native'

export const abrirMapa = async (options: { latitude?: number; longitude?: number } | { endereco: string }) => {
  let googleMapsURL = ''
  let appleMapsURL = ''

  if ('latitude' in options && 'longitude' in options) {
    const { latitude, longitude } = options
    googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    appleMapsURL = `maps://?q=${latitude},${longitude}`
  } else if ('endereco' in options) {
    const { endereco } = options
    googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`
    appleMapsURL = `maps://?q=${encodeURIComponent(endereco)}`
  } else {
    Alert.alert('Erro', 'Nenhuma informação de localização fornecida!')
    return
  }

  const canOpenAppleMaps = await Linking.canOpenURL(appleMapsURL)
  const canOpenGoogleMaps = await Linking.canOpenURL(googleMapsURL)

  if (canOpenAppleMaps && canOpenGoogleMaps) {
    Alert.alert(
      'Escolha o mapa',
      'Qual app de mapas você deseja usar?',
      [
        { text: 'Apple Maps', onPress: () => Linking.openURL(appleMapsURL) },
        { text: 'Google Maps', onPress: () => Linking.openURL(googleMapsURL) },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true },
    )
  } else if (canOpenAppleMaps) {
    Linking.openURL(appleMapsURL)
  } else if (canOpenGoogleMaps) {
    Linking.openURL(googleMapsURL)
  } else {
    Alert.alert('Erro', 'Nenhum app de mapas encontrado!')
  }
}
