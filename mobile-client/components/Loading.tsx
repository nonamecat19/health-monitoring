import { Spinner } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

interface IProps {}

export default function Loading({}: IProps) {
  return (
    <View style={styles.container}>
      <Spinner size="giant" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
})
