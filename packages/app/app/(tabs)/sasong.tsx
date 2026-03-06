import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, fontSize, fontFamily } from '../../src/theme/tokens'

export default function SeasonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Säsongsvy</Text>
      <Text style={styles.subtitle}>Kommer snart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  subtitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
})
