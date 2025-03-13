import { useTheme } from 'react-native-paper'

export function useIsDark() {
  const theme = useTheme()
  return theme.dark
}
