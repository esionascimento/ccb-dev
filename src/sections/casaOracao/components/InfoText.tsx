import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

interface InfoTextProps {
  label: string
  value?: string | number
  labelStyle?: object
}

export const InfoText: React.FC<InfoTextProps> = ({
  label,
  value,
  labelStyle,
}) => {
  return (
    <Text style={styles.texto}>
      <Text style={[styles.label, labelStyle]}>{label}: </Text>
      {value || 'N/A'}
    </Text>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 16,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
})
