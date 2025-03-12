import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

import { InfoText } from '@/src/sections/casaOracao/components/InfoText'
import { Coordenada } from '@/src/models/Coordenada'

type Props = {
  coordenada: Coordenada
}

export function CoordenadaLocalizacao({ coordenada }: Props) {
  return (
    <View>
      <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
        <Text style={styles.titulo}>Localização</Text>
        <View>
          <InfoText label="CEP" value={coordenada.endereco?.cep} />
          <InfoText
            label="Logradouro"
            value={`${coordenada.endereco?.logradouro || 'N/A'}, ${coordenada.endereco?.numero}`}
          />
          <InfoText label="Bairro" value={coordenada.endereco?.bairro} />
          <InfoText label="Cidade" value={coordenada.endereco?.cidade} />
          <InfoText label="Latitude" value={coordenada.latitude} />
          <InfoText label="Longitude" value={coordenada.longitude} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
})
