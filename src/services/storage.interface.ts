export type StorageKeys = 'configuracao' | 'user'

interface User {
  name: string
  id: number
}

export type StorageValues = {
  configuracao: Storage
  user: User
}

export interface Storage {
  endereco?: {
    cidade: string
    estado: string
  }
  metronome?: Metronome
}

export type Metronome = 'min' | 'med' | 'max'
