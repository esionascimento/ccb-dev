import { View } from 'react-native'
import { IconButton, Menu } from 'react-native-paper'

type Props = {
  setModalVisible: any
  isMenu: any
  setMenu: any
}

export const HeaderMenuCasaOracao = ({
  setModalVisible,
  isMenu,
  setMenu,
}: Props) => {
  const handle = (name: 'filtro') => {
    if ((name = 'filtro')) setModalVisible(true)
    setMenu(false)
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
        <Menu.Item onPress={() => handle('filtro')} title="Filtrar" />
      </Menu>
    </View>
  )
}
