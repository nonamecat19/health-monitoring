import { Text, useStyleSheet } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

interface IProps {}

export default function SearchNotFound({}: IProps) {
  const styles = useStyleSheet(themedStyles)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>За вашим запитом нічого не знайдено</Text>
    </View>
  )
}

const themedStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    color: 'color-primary-default',
    textAlign: 'center',
  },
})
