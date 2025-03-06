import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Portal, Modal, Text, Card } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
import { PaperSelect } from 'react-native-paper-select'

import {
  fetchCidadesPorEstado,
  fetchEstados,
} from '@/src/services/ibge/ibge.service'
import { Coordenada } from '@/src/models/Coordenada'
import { Toast } from 'toastify-react-native'

type Props = {
  open: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  coordenadas: Coordenada[]
  setCoordenadas: React.Dispatch<React.SetStateAction<Coordenada[]>>
}

export const ModalFiltroCasaOracao = ({
  open,
  setModalVisible,
  coordenadas,
  setCoordenadas,
}: Props) => {
  const [estados, setEstados] = useState<any[]>([])
  const [cidades, setCidades] = useState<any[]>([])
  const [estadoSelecionado, setEstadoSelecionado] = useState<any>('')
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>('')

  useEffect(() => {
    if (open) {
      fetchEstados()
        .then((data) => {
          const aux =
            data?.map((vl) => ({
              _id: vl.id,
              value: vl.sigla,
            })) || []
          // Toast.success('Estados carregados.')
          Toast.success(aux?.[0]?.value + '-' + aux?.[1]?.value)
          setEstados(aux)
        })
        .catch((error) => {
          Toast.error('Error carregar estados.')
          console.error('Erro buscar estados:', error)
        })
    }
  }, [open])

  useEffect(() => {
    if (estadoSelecionado) {
      fetchCidadesPorEstado(estadoSelecionado)
        .then((data) => {
          const aux = data.map((vl) => ({
            _id: vl.id,
            value: vl.nome,
          }))
          setCidades(aux)
          Toast.success('Cidades carregados.')
        })
        .catch((error) => {
          Toast.error('Error buscar cidades.')
          console.error('Erro ao buscar cidades:', error)
        })
    }
  }, [estadoSelecionado])

  const handleSearchCity = () => {
    const citySearch = coordenadas?.filter(
      (vl) => vl.endereco?.cidade === cidadeSelecionada,
    )
    setCoordenadas(citySearch)
    setModalVisible(false)
  }

  const [gender, setGender] = useState({
    value: '',
    list: [
      { _id: '1', value: 'MALE' },
      { _id: '2', value: 'FEMALE' },
      { _id: '3', value: 'OTHERS' },
    ],
    selectedList: [],
    error: '',
  })
  const [colors, setColors] = useState({
    value: '',
    list: [
      { _id: '1', value: 'BLUE' },
      { _id: '2', value: 'RED' },
      { _id: '3', value: 'GREEN' },
      { _id: '4', value: 'YELLOW' },
      { _id: '5', value: 'BROWN' },
      { _id: '6', value: 'BLACK' },
      { _id: '7', value: 'WHITE' },
      { _id: '8', value: 'CYAN' },
    ],
    selectedList: [],
    error: '',
  })

  return (
    <Portal>
      <Modal
        visible={open}
        onDismiss={() => setModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <Card style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtro por cidade</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>

          <PaperSelect
            label="Select Gender"
            value={gender.value}
            onSelection={(value: any) => {
              setGender({
                ...gender,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              })
            }}
            arrayList={[...gender.list]}
            selectedArrayList={gender.selectedList}
            errorText={gender.error}
            multiEnable={false}
            dialogTitleStyle={{ color: 'red' }}
            // checkboxColor="yellow"
            // checkboxLabelStyle={{ color: 'red', fontWeight: '700' }}
            // textInputBackgroundColor="yellow"
            // textInputColor="red"
            // outlineColor="black"
            theme={{
              colors: {
                placeholder: 'black',
              },
            }}
          />

          {/* <PaperSelect
            label="Selecione o Estado"
            value={estadoSelecionado}
            onSelection={(value: any) => {
              setEstadoSelecionado(value.text)
            }}
            arrayList={[...estados]}
            selectedArrayList={[]}
            multiEnable={false}
            searchStyle={{ color: 'red' }}
          /> */}

          {/* <PaperSelect
            label="Selecione a Cidade"
            value={cidadeSelecionada}
            onSelection={(value: any) => {
              setCidadeSelecionada(value.text)
            }}
            arrayList={[...cidades]}
            selectedArrayList={[]}
            multiEnable={false}
            searchStyle={{ color: 'red' }}
          /> */}

          <Pressable
            style={styles.closeButton}
            onPress={() => handleSearchCity()}
          >
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
    height: '40%',
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
