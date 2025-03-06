import { View } from 'react-native'
import { IconButton, Menu } from 'react-native-paper'

type Props = {
  isMenu: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  handleResetCoordenadas: () => void
}

export const HeaderMenuCasaOracao = ({
  setModalVisible,
  isMenu,
  setMenu,
  handleResetCoordenadas,
}: Props) => {
  const handle = (name: 'filtro' | 'reset') => {
    setMenu(false)
    if (name === 'filtro') return setModalVisible(true)
    if (name === 'reset') return handleResetCoordenadas()
  }

  return (
    <View style={{ position: 'absolute', right: 8 }}>
      <Menu
        visible={isMenu}
        onDismiss={() => setMenu(false)}
        anchor={
          <IconButton
            icon="dots-vertical"
            size={24}
            onPress={() => setMenu(true)}
          />
        }
        anchorPosition="bottom"
      >
        <Menu.Item
          onPress={() => handle('filtro')}
          title="Filtrar por Cidade"
        />
        <Menu.Item onPress={() => handle('reset')} title="Limpar Filtro" />
      </Menu>
    </View>
  )
}
