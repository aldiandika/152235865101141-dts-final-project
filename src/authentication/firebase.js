import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBORhnaXiwgfOOIlM06UNqfcv5_FBgw6iY",
//   authDomain: "tainted-development.firebaseapp.com",
//   projectId: "tainted-development",
//   storageBucket: "tainted-development.appspot.com",
//   messagingSenderId: "672379756589",
//   appId: "1:672379756589:web:216c8b5c1ac64e036058a4",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAcOUs-YyCa43KF6X7EG7dhQyYETt20IUk",
  authDomain: "dts-project-20b32.firebaseapp.com",
  projectId: "dts-project-20b32",
  storageBucket: "dts-project-20b32.appspot.com",
  messagingSenderId: "589349844516",
  appId: "1:589349844516:web:9d068db9d255c2dd52cab1",
};

// Inisialisasi Firebase dan menggunakan Authentcation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi untuk registrasi
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Logged in user", response.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Fungsi untuk reset password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  resetPassword,
  logout,
};
