export const convertOthers = {
  formatarSemanaEDia({
    semana,
    dia,
    horario,
  }: {
    semana: number | undefined
    dia: number | undefined
    horario: string | undefined
  }):
    | undefined
    | {
        semana: string
        dia: string
        horario: string
      } {
    if (!semana) return undefined
    if (!dia) return undefined
    if (!horario) return undefined

    const semanas = ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta']
    const dias = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ]

    const semanaTexto = semanas[semana - 1] ?? 'Semana inválida'
    const diaTexto = dias[dia - 1] ?? 'Dia inválido'

    return {
      semana: semanaTexto,
      dia: diaTexto,
      horario,
    }
  },
}
