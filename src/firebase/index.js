
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwYg9gyBqA7YdkQSgInxJAmr_6Xbf-NSU",
  authDomain: "badas-todo-4aba6.firebaseapp.com",
  projectId: "badas-todo-4aba6",
  storageBucket: "badas-todo-4aba6.appspot.com",
  messagingSenderId: "532528568030",
  appId: "1:532528568030:web:fd08fa07f068ee2117944f"
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {
    db
}