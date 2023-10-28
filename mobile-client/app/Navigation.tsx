import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationConfig} from "../config/navigation";
import {Route} from "../shared/types/navigation";

export default function Navigation() {
  const {Screen, Navigator} = createNativeStackNavigator();
  const initialRouteName: Route = "admin_room_list"
  return (
    <NavigationContainer>
      <Navigator initialRouteName={initialRouteName}>
        {navigationConfig.map(({name, component, title}, index) =>
          <Screen
            key={index}
            name={name}
            component={component}
            options={{title}}
          />
        )}
      </Navigator>
    </NavigationContainer>
  )
}
