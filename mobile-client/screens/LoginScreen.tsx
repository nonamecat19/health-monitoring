import {Button, Icon, Input, Layout} from "@ui-kitten/components";
import {ReactElement, useState} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  function authHandler() {
    navigation.navigate("admin_room_list")
  }

  const renderIcon = (props: any): ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout level="1" style={style.container}>
      <Input
        value={email}
        label='Електронна пошта'
        placeholder='example@student.ztu.edu.ua'
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        value={pass}
        label='Пароль'
        placeholder='***'
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPass(nextValue)}
      />
      <Button
        style={style.authButton}
        onPress={authHandler}
      >
        Авторизуватись
      </Button>
    </Layout>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    justifyContent: "center",
    gap: 10,
    height: "auto"
  },
  authButton: {
    marginTop: 10
  }
})