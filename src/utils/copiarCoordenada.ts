import * as Clipboard from 'expo-clipboard'
import { Toast } from 'toastify-react-native'

export const copiarCoordenada = async (latitude: number, longitude: number) => {
  const texto = `${latitude},${longitude}`
  await Clipboard.setStringAsync(texto)
  Toast.success('Coordenada copiada!')
}
