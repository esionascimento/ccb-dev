import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { fetchCidadesPorEstado, fetchEstados } from '@/src/services/ibge/ibge.service'
import CustomPicker from '@/src/components/inputs/CustomPicker'
import { storageService } from '@/src/services/storageService'
import { ThemedText } from '@/src/components/ThemedText'

export const SettingsCidadeDefault = () => {
  const [estadosOptions, setEstadosOptions] = useState<
    {
      label: string
      value: string
    }[]
  >([])
  const [estadoSelecionado, setEstadoSelecionado] = useState<any>('')
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>('')
  const [cidadesOptions, setCidadesOptions] = useState<any[]>([])
  const [configuracaoStorage, setConfiguracaoStorage] = useState<any>()

  useEffect(() => {
    fetchEstados()
      .then((data) => {
        const auxEstados =
          data?.map((vl) => ({
            label: vl.sigla,
            value: vl.sigla,
          })) || []
        const estadosOrdenadas = auxEstados.sort((a, b) => a.label.localeCompare(b.label))
        setEstadosOptions(estadosOrdenadas)
      })
      .catch((error) => {
        console.error('Erro buscar estados:', error)
      })
  }, [])

  useEffect(() => {
    if (estadoSelecionado) {
      fetchCidadesPorEstado(estadoSelecionado)
        .then((data) => {
          const auxCidades = data.map((vl) => ({
            label: vl.nome,
            value: vl.nome,
          }))
          const cidadesOrdenadas = auxCidades.sort((a, b) => a.label.localeCompare(b.label))
          setCidadesOptions(cidadesOrdenadas)
        })
        .catch((error) => {
          console.error('Erro ao buscar cidades:', error)
        })
    }
  }, [estadoSelecionado])

  useEffect(() => {
    ;(async () => {
      if (cidadeSelecionada && configuracaoStorage?.endereco?.cidade !== cidadeSelecionada) {
        await storageService.save('configuracao', {
          endereco: {
            cidade: cidadeSelecionada,
            estado: estadoSelecionado,
          },
        })
      }
    })()
  }, [cidadeSelecionada])

  useEffect(() => {
    ;(async () => {
      const configuracao = await storageService.get('configuracao')
      setConfiguracaoStorage(configuracao)

      if (configuracao?.endereco) {
        setCidadeSelecionada(configuracao?.endereco?.cidade)
        setEstadoSelecionado(configuracao?.endereco?.estado)
      }
    })()
  }, [])

  return (
    <>
      <ThemedText>Cidade Padrão:</ThemedText>
      <CustomPicker
        selectedValue={estadoSelecionado}
        onValueChange={(itemValue) => setEstadoSelecionado(itemValue)}
        items={estadosOptions || []}
        placeholder={!estadoSelecionado ? 'Selecione um estado' : undefined}
      />

      <View style={{ marginTop: 2 }} />

      {estadoSelecionado && (
        <CustomPicker
          selectedValue={cidadeSelecionada}
          onValueChange={(itemValue) => setCidadeSelecionada(itemValue as string)}
          items={cidadesOptions || []}
          placeholder="Selecione uma cidade"
        />
      )}
    </>
  )
}
