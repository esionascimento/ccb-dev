import { StyleSheet, View } from 'react-native'

import { HelloWave } from '@/src/components/HelloWave'
import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { HomeSection } from '@/src/sections/home/HomeSection'
import { LayoutHeader } from '@/src/layouts/header/layout-header'

export default function HomeScreen() {
  return (
    <LayoutHeader>
      <View style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">CCB!</ThemedText>
          <HelloWave />
        </ThemedView>
        <HomeSection />
      </View>
    </LayoutHeader>
  )
}

const styles = StyleSheet.create({
  container: { padding: 8 },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 3,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
