import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationConfig} from "../config/navigation";

export default function Navigation() {
  const {Screen, Navigator} = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        {navigationConfig.map(({name, component, title}, index) => {
          return <Screen
            key={index}
            name={name}
            component={component}
            options={{title}}
          />
        })}
      </Navigator>
    </NavigationContainer>
  )
}
