/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase.config";


//making context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    //google log in
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }



    const authentication = {
        googleLogin,
        
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;