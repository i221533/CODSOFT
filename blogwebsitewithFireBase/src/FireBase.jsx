// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDKe9I5WYNywMyG1uTouEhsxMgtlro3HDE",
    authDomain: "mybandkbolgsdata.firebaseapp.com",
    projectId: "mybandkbolgsdata",
    storageBucket: "mybandkbolgsdata.appspot.com",
    messagingSenderId: "699286975329",
    appId: "1:699286975329:web:30dfa0b72f78bee98fcb20"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const ImageStorage=getStorage(app);
const storeData=getFirestore(app);
export {app,ImageStorage,storeData,auth};