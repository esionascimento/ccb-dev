import { Divider } from 'react-native-paper'

import { SettingsCidadeDefault } from './components/cidadeDefault/CidadeDefault'
import { MetronomeDefault } from './components/metronome/MetronomeDefault'

export const ConfiguracaoSection = () => {
  return (
    <>
      <Divider />

      <SettingsCidadeDefault />

      <Divider bold style={{ marginTop: 5 }} />

      <MetronomeDefault />
    </>
  )
}
