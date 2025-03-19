import { debounce } from 'lodash'

/**
 * Função utilitária para criar um debounce genérico.
 *
 * @param func - A função que será executada após o tempo definido.
 * @param wait - Tempo de espera antes de executar a função (padrão: 500ms).
 * @returns Uma nova função que será chamada com debounce.
 */
export const createDebounce = <T extends (...args: any[]) => any>(func: T, wait = 500) => {
  return debounce(func, wait)
}
