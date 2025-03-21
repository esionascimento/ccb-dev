export interface Hino {
  id: string
  hino: number
  coro: boolean
  title: string
  compasso: {
    num: number
    den: number
  }
  tempo: {
    nota: string
    min: number
    max: number
  }
}
