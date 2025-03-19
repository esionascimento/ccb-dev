import { dataHinos } from '@/src/api/dataHinos'
import { Hino } from '@/src/models/Hinos'

export const serviceHino = {
  search: async ({ hino }: { hino?: number }): Promise<Hino> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let search

        if (hino) {
          search = dataHinos.find((item) => item?.hino === hino && !item?.coro)
          if (search) {
            resolve(search)
          }
        }
      }, 100)
    })
  },
}
