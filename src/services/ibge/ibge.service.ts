import AsyncStorage from '@react-native-async-storage/async-storage'
import { Cidade, Estado } from './ibge.interface'
import { Toast } from 'toastify-react-native'

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades'
const CHAVE_ESTADOS = '@App:estados'
const CHAVE_CIDADES = '@App:cidades'
const CHAVE_ULTIMA_ATUALIZACAO = '@App:ultimaAtualizacao'

// Busca estados da API
const fetchEstadosDaAPI = async (): Promise<Estado[]> => {
  try {
    const response = await fetch(`${BASE_URL}/estados`)
    if (!response.ok) {
      throw new Error('Erro ao buscar estados')
    }
    return response.json()
  } catch (error) {
    Toast.error('Error carregar estados!')
    return []
  }
}

// Busca cidades da API
const fetchCidadesDaAPI = async (uf: string): Promise<Cidade[]> => {
  const response = await fetch(`${BASE_URL}/estados/${uf}/municipios`)
  if (!response.ok) {
    throw new Error('Erro ao buscar cidades')
  }
  return response.json()
}

// Salva estados no AsyncStorage
const salvarEstados = async (estados: Estado[]) => {
  await AsyncStorage.setItem(CHAVE_ESTADOS, JSON.stringify(estados))
  await AsyncStorage.setItem(CHAVE_ULTIMA_ATUALIZACAO, new Date().toISOString())
}

// Carrega estados do AsyncStorage
const carregarEstados = async (): Promise<Estado[] | null> => {
  const estadosJSON = await AsyncStorage.getItem(CHAVE_ESTADOS)
  return estadosJSON ? JSON.parse(estadosJSON) : null
}

// Verifica se os dados estão desatualizados (mais de 1 dia)
const dadosPrecisamSerAtualizados = async (): Promise<boolean> => {
  try {
    const ultimaAtualizacaoJSON = await AsyncStorage.getItem(
      CHAVE_ULTIMA_ATUALIZACAO,
    )
    if (!ultimaAtualizacaoJSON) return true

    const ultimaAtualizacao = new Date(ultimaAtualizacaoJSON)
    const hoje = new Date()
    const diferencaEmDias = Math.floor(
      (hoje.getTime() - ultimaAtualizacao.getTime()) / (1000 * 60 * 60 * 24),
    )

    return diferencaEmDias >= 1
  } catch (error) {
    Toast.error('Erro ler AsyncStorage')
    return true
  }
}

// Busca estados (da API ou do AsyncStorage)
export const fetchEstados = async (): Promise<Estado[]> => {
  const precisaAtualizar = await dadosPrecisamSerAtualizados()

  if (precisaAtualizar) {
    const estados = await fetchEstadosDaAPI()

    await salvarEstados(estados)
    return estados
  }

  const estadosArmazenados = await carregarEstados()
  return estadosArmazenados || []
}

// Busca cidades (da API ou do AsyncStorage)
export const fetchCidadesPorEstado = async (uf: string): Promise<Cidade[]> => {
  const cidadesJSON = await AsyncStorage.getItem(`${CHAVE_CIDADES}:${uf}`)
  if (cidadesJSON) {
    return JSON.parse(cidadesJSON)
  }

  const cidades = await fetchCidadesDaAPI(uf)
  await AsyncStorage.setItem(`${CHAVE_CIDADES}:${uf}`, JSON.stringify(cidades))
  return cidades
}

// import { Cidade, Estado } from './ibge.interface'

// const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades'

// export const serviceIbge = {
//   estados: async (): Promise<Estado[]> => {
//     try {
//       const response = await fetch(`${BASE_URL}/estados`)
//       if (!response.ok) {
//         throw new Error('Erro ao buscar estados')
//       }
//       const data = await response.json()
//       return data
//     } catch (error) {
//       console.error('Erro ao buscar estados:', error)
//       throw error
//     }
//   },
//   cidadePorEstado: async (uf: string): Promise<Cidade[]> => {
//     try {
//       const response = await fetch(`${BASE_URL}/estados/${uf}/municipios`)
//       if (!response.ok) {
//         throw new Error('Erro ao buscar cidades')
//       }
//       const data = await response.json()
//       return data
//     } catch (error) {
//       console.error('Erro ao buscar cidades:', error)
//       throw error
//     }
//   },
// }
