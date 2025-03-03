import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { HapticTab } from '@/src/components/HapticTab'
import { IconSymbol } from '@/src/components/ui/IconSymbol'
import TabBarBackground from '@/src/components/ui/TabBarBackground'

export default function TabLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarButton: HapticTab,
              tabBarBackground: TabBarBackground,
              tabBarStyle: Platform.select({
                ios: {
                  position: 'absolute',
                },
                default: {},
              }),
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: 'Início',
                tabBarIcon: ({ color }) => (
                  <IconSymbol size={28} name="house.fill" color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="casa-oracao"
              options={{
                title: 'Casa de Oração',
                tabBarIcon: ({ color }) => (
                  <IconSymbol size={28} name="paperplane.fill" color={color} />
                ),
              }}
            />
          </Tabs>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
})
