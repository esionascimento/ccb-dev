import React from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useTheme } from 'react-native-paper'

interface PickerItem {
  label: string
  value: string | number | null
}

interface CustomPickerProps {
  selectedValue: string | number | null
  onValueChange: (itemValue: string | number | null) => void
  items: PickerItem[]
  placeholder?: string
  style?: object
  mode?: 'dropdown' | 'dialog'
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  selectedValue,
  onValueChange,
  items,
  placeholder,
  style,
  mode = 'dropdown',
  ...props
}) => {
  const paperTheme = useTheme()

  const colors = {
    background: '#2c2c2e',
    pickerBackground:
      paperTheme.colors.elevation?.level2 ||
      (paperTheme.dark ? '#2c2c2e' : '#f0f0f0'),
    text: paperTheme.dark ? '#000' : '#000',
    icon: paperTheme.colors.primary,
  }

  const styles = StyleSheet.create({
    picker: {
      color: colors.text,
      backgroundColor: colors.pickerBackground,
    },
  })

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{
          backgroundColor: paperTheme.dark ? '#464b52' : '#FFF',
          color: paperTheme.dark ? '#FFF' : '#000',
        }}
        dropdownIconColor={colors.icon}
        dropdownIconRippleColor={colors.icon}
        mode={mode}
        {...props}
      >
        {placeholder && (
          <Picker.Item color="#000" label={placeholder} value={null} />
        )}
        {items.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            color={colors.text}
          />
        ))}
      </Picker>
    </>
  )
}

export default CustomPicker
