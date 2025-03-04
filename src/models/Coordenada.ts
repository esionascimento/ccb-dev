export interface Coordenada {
  id: string
  nome: string
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
  }
  ministerio?: {
    cooperadorOficioMinisterial: string
    diacono: string
    cooperadorJovensMenores: string
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
}
