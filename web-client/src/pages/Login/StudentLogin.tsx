import { FC, useEffect } from 'react'
import {Button} from "antd"
// @ts-ignore
import {initializeApp} from "firebase/app";
// @ts-ignore
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import {FIREBASE_TOKEN_NAME} from "../../shared/constants/Requests.ts";
// import {useNavigate} from "react-router-dom";
// import PATH from "../../shared/constants/Path.ts";

import {GoogleAuth, User} from '@codetrix-studio/capacitor-google-auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyC42CCL4g-xwCBXQ7tQbCfSJHRnSMaTRVM",
//     authDomain: "health-monitoring-5dc66.firebaseapp.com",
//     projectId: "health-monitoring-5dc66",
//     storageBucket: "health-monitoring-5dc66.appspot.com",
//     messagingSenderId: "1066252695771",
//     appId: "1:1066252695771:web:ebf4a7696f2d52f1bc74fe"
// }
// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

type Props = {

}

const StudentLogin: FC<Props> = ({}) => {

    // const navigate = useNavigate()
    // const {STUDENT, ME} = PATH

    const mobileGoogleAuth = async () => {
      // navigate(`/${STUDENT}/${ME}`)

      const user: User = await GoogleAuth.signIn();
      console.log(user)
    }

    useEffect(() => {
      GoogleAuth.initialize();
    }, [])


    // @ts-ignore
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
    //             // const credential = GoogleAuthProvider.credentialFromError(error);
    //         })
    // }

    return (
        <div>
            <Button
                type="primary"
                // onClick={authHandler}
                onClick={mobileGoogleAuth}
            >Увійти як студент</Button>
        </div>
    )
}
export default StudentLogin