// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDp-_yMdJsXcT9RXwtyfanoxERjrpwC5bU",
  authDomain: "ecommerceapp-28a84.firebaseapp.com",
  projectId: "ecommerceapp-28a84",
  storageBucket: "ecommerceapp-28a84.appspot.com",
  messagingSenderId: "785921180228",
  appId: "1:785921180228:web:58131cd3d5a3cf9c7a7211"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const ImageStorage=getStorage(app);
const storeData=getFirestore(app);
export {app,ImageStorage,storeData,auth};