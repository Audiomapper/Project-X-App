import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Letter } from './Letter'

const spacingForLetterIndex = (letters, index, spacing) => (letters.length - 1 === index) ? 0 : spacing

export const LetterSpacing = (props) => {
  const { children, spacing, viewStyle, textStyle, onPress } = props
  const letters = children.split('');

  return (
    <View
      style={[styles.container, viewStyle]}>
      {letters.map((letter, index) =>
        <Letter
          key={index}
          spacing={spacingForLetterIndex(letters, index, spacing)}
          textStyle={textStyle}
          onPress={onPress}>
          {letter}
        </Letter>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
