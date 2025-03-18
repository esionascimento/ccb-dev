import AsyncStorage from '@react-native-async-storage/async-storage'
import { Toast } from 'toastify-react-native'
import { EventEmitter } from 'events'

const storageEventEmitter = new EventEmitter()
export const storageService = {
  save: async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      storageEventEmitter.emit(key, value) // Notifica mudança
      Toast.success('Sucesso salvar dados')
    } catch (error) {
      console.error('Erro ao salvar dados:', error)
      Toast.error('Erro ao salvar dados')
    }
  },

  get: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue ? JSON.parse(jsonValue) : null
    } catch (error) {
      console.error('Erro ao recuperar dados:', error)
      return null
    }
  },

  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error('Erro ao remover dados:', error)
    }
  },

  clearAll: async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error('Erro ao limpar armazenamento:', error)
    }
  },

  onChange: (key: string, callback: (value: any) => void) => {
    storageEventEmitter.on(key, callback)
  },

  offChange: (key: string, callback: (value: any) => void) => {
    storageEventEmitter.off(key, callback)
  },
}
