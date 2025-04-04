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
  searchCityUf: async ({ cidade, uf }: { cidade: string; uf: string }): Promise<Coordenada[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = dataCoordenadas

        if (cidade) {
          results = results.filter((item) => {
            const cidadeItem = item.endereco?.cidade?.toLowerCase() ?? ''
            const ufItem = item.endereco?.uf?.toLowerCase() ?? ''
            const cidadeFiltro = cidade?.toLowerCase() ?? ''
            const ufFiltro = uf?.toLowerCase() ?? ''

            return cidadeItem.includes(cidadeFiltro) && ufItem.includes(ufFiltro)
          })
        }

        resolve(results)
      }, 100)
    })
  },
}
