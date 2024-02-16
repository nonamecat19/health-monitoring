import {FC} from 'react'
import {Button} from "antd"

export const StudentLogin: FC = () => {

  // const navigate = useNavigate()
  // const {STUDENT, ME} = PATH

  // const authHandler = () => {
  //     signInWithPopup(auth, provider)
  //         .then((result) => {
  //             // @ts-ignore
  //             const token = result.user.accessToken
  //             if (token) {
  //                 localStorage.setItem(FIREBASE_TOKEN_NAME, token)
  //                 navigate(`/${STUDENT}/${ME}`)
  //             }
  //         })
  //         .catch(() => {
  //             // const errorCode = error.code;
  //             // const errorMessage = error.message;
  //             // const email = error.customData.email;
  //             // const credential = GoogleAuthProvider credentialFromError(error);
  //         })
  // }

  return (
    <div>
      <Button
        type="primary"
        // onClick={authHandler}
        // onClick={mobileGoogleAuth}
      >Увійти як студент</Button>
    </div>
  )
}
