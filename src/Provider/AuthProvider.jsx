/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase.config";

//making context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const[user, setUser] = useState({});
    const[loading, setLoading] = useState(true);


  //log in by google
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //creatiing a user or sign up
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in a user
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  //update profile
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
  }

  //sign out a user
  const logOut = () => {
    return signOut(auth)
  }

  //onauthstateChanged or observer
 useEffect(()=>{
    onAuthStateChanged(auth, user => {
        setUser(user);
        setLoading(false);
    });
 },[])
 console.log(user)

  const authentication = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user,
    loading,
    handleUpdateProfile,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
