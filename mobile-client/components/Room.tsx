import { Octicons } from '@expo/vector-icons'
import { Button, useStyleSheet, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

export default function Room() {
  const styles = useStyleSheet(themedStyles)

  const type = 'lecture'
  const iconTypes = {
    lecture: 'people',
    practice: 'mortar-board',
  }
  const icon: any = iconTypes[type] ?? ''

  return (
    <View style={styles.card}>
      <View style={styles.titleGroup}>
        <Octicons name={icon} size={30} color="white" />
        <Text category="h5" style={styles.text}>
          Кімната ОЦ 583
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button status="control" style={styles.button}>
          Записи
        </Button>
        <Button status="control" style={styles.button}>
          Статистика
        </Button>
      </View>
    </View>
  )
}

const themedStyles = StyleSheet.create({
  text: {
    color: 'white',
  },
  titleGroup: {
    marginLeft: 15,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  card: {
    width: '100%',
    height: 100,
    backgroundColor: 'color-primary-default',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 7,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '47%',
  },
})
