import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import ToastManager, { Toast } from 'toastify-react-native'
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper'

import { useColorScheme } from '@/src/hooks/useColorScheme'
import { fetchEstados } from '../services/ibge/ibge.service'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  // useEffect(() => {
  //   // Carrega os estados em segundo plano ao iniciar o app
  //   fetchEstados()
  //     .then(() => {
  //       Toast.success('Estados carregados!')
  //     })
  //     .catch((error) => {
  //       Toast.error('Error carregar estados!')
  //     })
  // }, [])

  return (
    <>
      <PaperProvider theme={theme}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
          <ToastManager
            textStyle={{
              fontSize: 16,
            }}
            showProgressBar={false}
            duration={8000}
            position="bottom"
          />
        </ThemeProvider>
      </PaperProvider>
    </>
  )
}
