import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { ReactElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'




export default function LoginScreen({ navigation }) {

  GoogleSignin.configure({
    webClientId: '1066252695771-od22dj09js7t30th9piaj0tq41le2vs3.apps.googleusercontent.com'
  })

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
    const {idToken} = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const user_sign_in = auth().signInWithCredential(googleCredential)
    user_sign_in.then((user) => {
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  }

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry)
  }

  function authHandler() {
    navigation.navigate('admin_room_list')
  }

  const renderIcon = (props: any): ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <Layout level="1" style={style.container}>
      <Input
        value={email}
        label="Електронна пошта"
        placeholder="example@student.ztu.edu.ua"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        value={pass}
        label="Пароль"
        placeholder="***"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPass(nextValue)}
      />
      <Button style={style.authButton} onPress={authHandler}>
        Авторизуватись
      </Button>
      <Button style={style.authButton} onPress={onGoogleButtonPress}>
        Авторизуватись Google
      </Button>
    </Layout>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    height: 'auto',
  },
  authButton: {
    marginTop: 10,
  },
})
