/* eslint-disable react/prop-types */
import { createContext} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase.config";


//making context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    //log in by google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //creatiing a user or sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authentication = {
        googleLogin,
        createUser,
        
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;