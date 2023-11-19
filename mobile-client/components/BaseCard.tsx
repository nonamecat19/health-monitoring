import {StyleSheet, View} from "react-native";
import {Button, useStyleSheet, Text} from "@ui-kitten/components";
import { Octicons } from '@expo/vector-icons';

interface IProps {
  icon: string
  title: string
  firstButtonName: string
  firstButtonHandler: () => void
  secondButtonName: string
  secondButtonHandler: () => void
}

export default function BaseCard({icon, title, firstButtonName, firstButtonHandler, secondButtonName, secondButtonHandler}: IProps) {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.card}>
      <View style={styles.titleGroup}>
        <Octicons name={icon as any} size={30} color="white" />
        <Text category='h5' style={styles.text}>
          {title}
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          status='control'
          style={styles.button}
          onPress={firstButtonHandler}
        >
          {firstButtonName}
        </Button>
        <Button
          status='control'
          style={styles.button}
          onPress={secondButtonHandler}
        >
          {secondButtonName}
        </Button>
      </View>
    </View>
  )
}

const themedStyles = StyleSheet.create({
  text: {
    color: 'white'
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
    paddingBottom: 7
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: "47%"
  }
})