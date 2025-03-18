import { useEffect, useState } from 'react'
import { storageService } from '../services/storageService'

export const useConfiguracao = () => {
  const [configuracao, setConfiguracao] = useState<any>(null)

  useEffect(() => {
    const fetchConfiguracao = async () => {
      const config = await storageService.get('configuracao')
      setConfiguracao(config)
    }

    fetchConfiguracao()

    const handleStorageChange = (user: any) => {
      setConfiguracao(user)
    }

    storageService.onChange('configuracao', handleStorageChange)

    return () => {
      storageService.offChange('configuracao', handleStorageChange)
    }
  }, [])

  return configuracao
}
