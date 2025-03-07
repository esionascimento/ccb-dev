import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

import { convertOthers } from '@/src/utils/convert/others'
import { Coordenada } from '@/src/models/Coordenada'
import { enums } from '@/src/enum'

type Props = {
  coordenada: Coordenada
}

export function CoordenadaDiasCulto({ coordenada }: Props) {
  const ensaioFormat = convertOthers.formatarSemanaEDia({
    semana: coordenada.diasCulto?.ensaio?.semana,
    dia: coordenada.diasCulto?.ensaio?.dia,
    horario: coordenada.diasCulto?.ensaio?.horario,
  })

  return (
    <Card style={{ elevation: 4, borderRadius: 8, padding: 10 }}>
      <Text style={styles.titulo}>Dias de Culto</Text>

      <Text style={styles.subtitle}>Cultos:</Text>
      {coordenada?.diasCulto?.cultos?.map((culto, index) => (
        <Text key={index} style={styles.texto}>
          {enums.DiasSemana[culto.dia]} - {culto.horario}
        </Text>
      ))}

      <View style={styles.space} />

      <Text style={styles.subtitle}>Reunião de Jovens e Menores:</Text>
      {coordenada?.diasCulto?.reuniaoJovemMenores?.map((culto, index) => (
        <Text key={index} style={styles.texto}>
          {enums.DiasSemana[culto.dia]} - {culto.horario}
        </Text>
      ))}

      <View style={styles.space} />

      <Text style={styles.subtitle}>Ensaio:</Text>
      {ensaioFormat ? (
        <>
          <Text style={styles.texto}>{ensaioFormat?.semana} semana do mês</Text>
          <Text style={styles.texto}>
            {ensaioFormat?.dia} às {ensaioFormat?.horario}
          </Text>
        </>
      ) : (
        <Text style={styles.texto}>Nenhum ensaio cadastrado.</Text>
      )}
    </Card>
  )
}

const styles = StyleSheet.create({
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, marginTop: 8 },
  texto: { fontSize: 16 },
  space: { marginTop: 8, marginBottom: 8 },
})
