import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDL3LeYShOGoJSncZ_C8Ol0lYiQB8lBnxg",
  authDomain: "chat-app-80d9e.firebaseapp.com",
  projectId: "chat-app-80d9e",
  storageBucket: "chat-app-80d9e.appspot.com",
  messagingSenderId: "697701535349",
  appId: "1:697701535349:web:d211e78294bf2cbf6cb23c",
  measurementId: "G-6MN72JZ1KJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()