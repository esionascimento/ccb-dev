import { ReactNode } from 'react'
import { useRouter, Slot } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useAppTheme } from '@/src/app/_layout'
import { ThemedText } from '@/src/components/ThemedText'
import { PATH } from '@/src/constants/routes'
import { ThemedView } from '@/src/components/ThemedView'

interface LayoutHeaderProps {
  children?: ReactNode
  title?: string
}

export function LayoutHeader({ children, title = 'Início' }: LayoutHeaderProps) {
  const router = useRouter()
  const theme = useAppTheme()

  return (
    <View style={{ flex: 1 }}>
      <ThemedView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: theme.colors.inverseOnSurface,
        }}
      >
        <ThemedText style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</ThemedText>

        <TouchableOpacity onPress={() => router.push(PATH.settings)}>
          <Ionicons name="settings-outline" size={28} color={theme.dark ? 'white' : 'black'} />
        </TouchableOpacity>
      </ThemedView>

      {children ?? <Slot />}
    </View>
  )
}
