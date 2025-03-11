import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Portal, Modal, Text, Card, useTheme } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'

import { fetchCidadesPorEstado, fetchEstados } from '@/src/services/ibge/ibge.service'
import { Coordenada } from '@/src/models/Coordenada'
import CustomPicker from '@/src/components/inputs/CustomPicker'
import { mockCoordenadas } from '@/src/mock/mockCoordenadas'

type Props = {
  open: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  setCoordenadasSearch: React.Dispatch<React.SetStateAction<Coordenada[]>>
}

export const ModalFiltroCasaOracaoSection = ({ open, setModalVisible, setCoordenadasSearch }: Props) => {
  const paperTheme = useTheme()
  const [estadosOptions, setEstadosOptions] = useState<
    {
      label: string
      value: string
    }[]
  >([])
  const [cidadesOptions, setCidadesOptions] = useState<any[]>([])
  const [estadoSelecionado, setEstadoSelecionado] = useState<any>('')
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | number | null>('')

  useEffect(() => {
    if (open) {
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
    }
  }, [open])

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

  const handleSearchCity = async () => {
    const citySearch = mockCoordenadas?.filter((vl) => vl.endereco?.cidade === cidadeSelecionada)
    setCoordenadasSearch(citySearch)
    setModalVisible(false)
  }

  return (
    <Portal>
      <Modal visible={open} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modalContainer}>
        <Card style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtro por cidade</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <MaterialIcons name="close" color={paperTheme?.dark ? '#FFF' : '#000'} size={22} />
            </Pressable>
          </View>

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
              onValueChange={(itemValue) => setCidadeSelecionada(itemValue)}
              items={cidadesOptions || []}
              placeholder="Selecione uma cidade"
            />
          )}

          <Pressable style={styles.closeButton} onPress={() => handleSearchCity()}>
            <Text style={styles.closeButtonText}>Buscar</Text>
          </Pressable>
        </Card>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: '30%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'center',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
})
