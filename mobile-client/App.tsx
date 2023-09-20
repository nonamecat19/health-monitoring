import {StyleSheet, Text} from 'react-native';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";

export default () => (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Text>
          Test
        </Text>
      </ApplicationProvider>
    </>
)

const styles = StyleSheet.create({

});

