export const convertOthers = {
  formatarDia(dia: number | undefined): string {
    if (!dia) return ''

    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const diaTexto = dias[dia - 1] ?? 'Dia inválido'

    return diaTexto
  },
  formatarSemana(semana: number | undefined): string {
    if (!semana) return ''

    const semanas = ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta']
    const semanaTexto = semanas[semana - 1] ?? 'Semana inválida'

    return semanaTexto
  },
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
    return {
      semana: convertOthers.formatarSemana(semana),
      dia: convertOthers.formatarDia(dia),
      horario: horario || '',
    }
  },
}
