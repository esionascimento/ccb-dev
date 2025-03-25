import AsyncStorage from '@react-native-async-storage/async-storage'
import { Toast } from 'toastify-react-native'
import { EventEmitter } from 'events'
import { StorageKeys, StorageValues } from './storage.interface'

const storageEventEmitter = new EventEmitter()

export const storageService = {
  save: async <K extends StorageKeys>(key: K, value: Partial<StorageValues[K]>) => {
    try {
      const existingData = await AsyncStorage.getItem(key)
      const parsedData: StorageValues[K] = existingData ? JSON.parse(existingData) : {}

      const updatedData = { ...parsedData, ...value }

      const jsonValue = JSON.stringify(updatedData)
      await AsyncStorage.setItem(key, jsonValue)

      storageEventEmitter.emit(key, updatedData)
      Toast.success('Dados atualizados com sucesso')
    } catch (error) {
      console.error('Erro ao salvar dados:', error)
      Toast.error('Erro ao salvar dados')
    }
  },

  get: async <K extends StorageKeys>(key: K): Promise<StorageValues[K] | null> => {
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
