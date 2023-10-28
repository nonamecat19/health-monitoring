import {StyleSheet, View} from "react-native";
import {ReactElement, useState} from "react";
import {Button, Tooltip} from "@ui-kitten/components";

export default function Room() {
  const [visible, setVisible] = useState(false);
  const renderToggleButton = (): ReactElement => (
    <Button style={style.toggleButton} onPress={() => setVisible(true)}>
      TOGGLE
    </Button>
  )

  return (
    <Tooltip
      anchor={renderToggleButton}
      visible={visible}
      onBackdropPress={() => setVisible(false)}
      backdropStyle={style.backdrop}
    >
      <View style={style.tooltipContainer}>
        <Button>Записи</Button>
        <Button style={style.secondButton}>Статистика</Button>
      </View>
    </Tooltip>
  )
}

const style = StyleSheet.create({
  backdrop: {
    borderBlockColor: '#433232',
    width: 800
  },
  tooltipContainer: {
    gap: 10,
  },
  secondButton: {
    marginTop: 10
  },
  toggleButton: {
    width: "100%"
  }
})