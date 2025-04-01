import React, { useState } from 'react'
import { Portal, Modal, Text, Card, useTheme, Checkbox } from 'react-native-paper'
import { Pressable, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { dataCoordenadas } from '@/src/api/dataCoordenadas'
import { diasSemana } from '@/src/enum/diasSemana'

type Props = {
  open: boolean
  onClose: () => void
  setCoordenadasSearch: any
}

export const ModalFiltroEnsaio = ({ open, onClose, setCoordenadasSearch }: Props) => {
  const paperTheme = useTheme()
  const [selecionados, setSelecionados] = useState<string[]>([])
  const [todosSelecionados, setTodosSelecionados] = useState(false)

  const handleSearchEnsaio = async () => {
    const diasSelecionadosNumeros = selecionados
      .map((id) => diasSemana.find((dia) => dia.id === id)?.numero || 0)
      .filter((num) => num !== 0)

    const filteredData = dataCoordenadas.filter((item) => {
      if (item.diasCulto?.ensaio?.dia) {
        return diasSelecionadosNumeros.includes(item.diasCulto.ensaio.dia)
      }
      return false
    })

    setCoordenadasSearch(filteredData)
    onClose()
  }

  const toggleDia = (id: string) => {
    setSelecionados((prev) => (prev.includes(id) ? prev.filter((dia) => dia !== id) : [...prev, id]))
  }

  const toggleTodos = () => {
    if (todosSelecionados) {
      setSelecionados([])
    } else {
      setSelecionados(diasSemana.map((dia) => dia.id))
    }
    setTodosSelecionados(!todosSelecionados)
  }

  return (
    <Portal>
      <Modal visible={open} onDismiss={() => onClose()} contentContainerStyle={styles.modalContainer}>
        <Card style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Selecione os dias dos cultos</Text>
            <Pressable onPress={() => onClose()}>
              <MaterialIcons name="close" color={paperTheme?.dark ? '#FFF' : '#000'} size={22} />
            </Pressable>
          </View>

          <View>
            <Checkbox.Item
              label="Selecionar Todos"
              status={todosSelecionados ? 'checked' : 'unchecked'}
              onPress={toggleTodos}
            />
            {diasSemana.map((dia) => (
              <Checkbox.Item
                key={dia.id}
                label={dia.label}
                status={selecionados.includes(dia.id) ? 'checked' : 'unchecked'}
                onPress={() => toggleDia(dia.id)}
              />
            ))}
          </View>

          <Pressable style={styles.closeButton} onPress={() => handleSearchEnsaio()}>
            <Text style={styles.closeButtonText}>Buscar</Text>
          </Pressable>
        </Card>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
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

  closeButton: {
    alignSelf: 'center',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
})
