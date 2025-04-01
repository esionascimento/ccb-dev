import { IconButton, Menu } from 'react-native-paper'
import { View } from 'react-native'

type Props = {
  isMenu: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  handleResetCoordenadas: () => void
  handleFiltroEnsaio: () => void
}

export const HeaderMenuCasaOracao = ({
  setModalVisible,
  isMenu,
  setMenu,
  handleResetCoordenadas,
  handleFiltroEnsaio,
}: Props) => {
  const handle = (name: 'filtro' | 'reset' | 'filtroEnsaio') => {
    setMenu(false)
    if (name === 'filtro') return setModalVisible(true)
    if (name === 'reset') return handleResetCoordenadas()
    if (name === 'filtroEnsaio') return handleFiltroEnsaio()
  }

  return (
    <View style={{ position: 'absolute', right: 8 }}>
      <Menu
        visible={isMenu}
        onDismiss={() => setMenu(false)}
        anchor={<IconButton icon="dots-vertical" size={24} onPress={() => setMenu(true)} />}
        anchorPosition="bottom"
      >
        <Menu.Item onPress={() => handle('filtro')} title="Filtrar por Cidade" />
        <Menu.Item onPress={() => handle('filtroEnsaio')} title="Filtrar Ensaio" />
        <Menu.Item onPress={() => handle('reset')} title="Limpar Filtro" />
      </Menu>
    </View>
  )
}
