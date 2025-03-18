import { dataCoordenadas } from '@/src/api/dataCoordenadas'
import { Coordenada } from '@/src/models/Coordenada'

export const serviceCoordenada = {
  search: async ({
    cidade,
    nome,
    diasCulto,
  }: {
    cidade?: string
    nome?: string
    diasCulto?: number
  }): Promise<Coordenada[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = dataCoordenadas

        if (cidade) {
          results = results.filter((item) => item.endereco?.cidade.toLowerCase().includes(cidade.toLowerCase()))
        }
        if (nome) {
          results = results.filter(
            (item) =>
              item.nome.toLowerCase().includes(nome.toLowerCase()) ||
              item.segundoNome?.toLowerCase().includes(nome.toLowerCase()),
          )
        }
        if (diasCulto !== undefined) {
          results = results.filter((item) => item.diasCulto?.cultos.some((culto) => culto.dia === diasCulto))
        }

        resolve(results)
      }, 100)
    })
  },
}
