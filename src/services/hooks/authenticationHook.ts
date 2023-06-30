'use client'

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

const auth = getAuth()

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const onAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user)
    })
  })
}

const logOut = () => {
  return signOut(auth)
}

export const authentication = {
  new: signUp,
  in: signIn,
  on: onAuth,
  out: logOut,
}
