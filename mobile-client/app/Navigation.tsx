import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { navigationConfig } from '../config/navigation'
import { ScreenName } from '../shared/types/navigation'

export default function Navigation() {
  const { Screen, Navigator } = createDrawerNavigator()

  const initialRouteName: ScreenName = 'admin_room_list'
  return (
    <NavigationContainer>
      <Navigator initialRouteName={initialRouteName}>
        {navigationConfig.map(({ name, component, title }, index) => (
          <Screen key={index} name={name} component={component} options={{ title }} />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}
