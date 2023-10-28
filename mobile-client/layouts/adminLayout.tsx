import {ReactNode, useState} from "react";
import {BottomNavigation, BottomNavigationTab, Icon, IconElement} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import GetEvaIcon from "../components/GetEvaIcon";
import {ScreenName} from "../shared/types/navigation";

interface IProps {
  children: ReactNode
  navigation: any
}

export default function AdminLayout({children, navigation}: IProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function changeTabHandle(index: number) {
    setSelectedIndex(index)
    navigation.navigate("admin_user_records" as ScreenName)
  }

  return (
    <>
      <View style={style.container}>
        {children}
      </View>
      <View style={style.gap}/>
      <View style={style.bottom}>
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={changeTabHandle}
        >
          <BottomNavigationTab
            icon={GetEvaIcon('list-outline')}
            title='USERS'
          />
          <BottomNavigationTab
            icon={GetEvaIcon('credit-card-outline')}
            title='ORDERS'
          />
          <BottomNavigationTab
            icon={GetEvaIcon('activity-outline')}
            title='TRANSACTIONS'
          />
        </BottomNavigation>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    height: "91%"
  },
  gap: {
    height: "1%",
    backgroundColor: "#ffffff"
  },
  bottom: {
    height: "8%",
    backgroundColor: "#ffffff"
  }
})