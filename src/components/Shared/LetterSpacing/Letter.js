import React from 'react'
import { Text } from 'react-native'

export const Letter = (props) => {
  const {
    children,
    spacing,
    textStyle,
    onPress
  } = props

  const letterStyles = [
    textStyle,
    { paddingRight: spacing }
  ]

  return (
    <Text
      style={letterStyles}
      onPress={onPress}>
      {children}
    </Text>
  )
}
