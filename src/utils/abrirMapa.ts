import { Linking, Alert } from 'react-native'

interface AbrirMapaParams {
  latitude?: number
  longitude?: number
  endereco?: string
}

export const abrirMapa = async ({ latitude, longitude, endereco }: AbrirMapaParams) => {
  console.log('latitude: ', latitude)
  console.log('longitude: ', longitude)
  console.log('endereco: ', endereco)
  console.log('!latitude: ', !!latitude)
  const hasCoordinates = !!latitude && !!longitude
  console.log('hasCoordinates: ', hasCoordinates)

  const mapsMeUrl = hasCoordinates
    ? `mapsme://map?ll=${latitude},${longitude}&z=15`
    : `mapsme://search?query=${encodeURIComponent(endereco || '')}`

  const googleMapsUrl = hasCoordinates
    ? `geo:${latitude},${longitude}?q=${latitude},${longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco || '')}`

  const wazeUrl = hasCoordinates
    ? `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`
    : `https://waze.com/ul?q=${encodeURIComponent(endereco || '')}`

  // Tenta abrir Maps.Me
  if (await Linking.canOpenURL(mapsMeUrl)) {
    console.log('mapsMeUrl: ', mapsMeUrl)
    await Linking.openURL(mapsMeUrl)
    return
  }

  // Tenta abrir Google Maps
  if (await Linking.canOpenURL(googleMapsUrl)) {
    console.log('googleMapsUrl: ', googleMapsUrl)
    await Linking.openURL(googleMapsUrl)
    return
  }

  // Tenta abrir Waze
  if (await Linking.canOpenURL(wazeUrl)) {
    console.log('wazeUrl: ', wazeUrl)
    await Linking.openURL(wazeUrl)
    return
  }

  Alert.alert('Erro', 'Não foi possível abrir o mapa.')
}
