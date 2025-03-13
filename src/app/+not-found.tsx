import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Esta tela não existe.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Ir para a tela inicial!</ThemedText>
        </Link>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
