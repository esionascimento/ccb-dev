export interface Coordenada {
  id: string
  nome: string
  segundoNome?: string
  latitude: number
  longitude: number
  atualizacao: string
  endereco?: Endereco
  diasCulto?: {
    cultos: {
      dia: string
      horario: string
    }[]
    reuniaoJovemMenores?: {
      dia: string
      horario: string
    }[]
    ensaio?: {
      semana: number
      dia: number
      horario: string
    }
  }
  ministerio?: {
    cooperadorOficioMinisterial?: string
    diacono?: string
    cooperadorJovensMenores?: string
  }
  infoAdicionais?: {
    adm?: string
    ra?: string
    rrm?: string
    atr?: string
  }
}

interface Endereco {
  logradouro: string
  cep: number
  cidade: string
  numero: number
  bairro?: string
  complemento?: string
}
