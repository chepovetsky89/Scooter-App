import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsy2ZcV8oiFSdf2SShXdW2W5Xg3cOvXN8",
    authDomain: "scooter-app-c35ec.firebaseapp.com",
    projectId: "scooter-app-c35ec",
    storageBucket: "scooter-app-c35ec.appspot.com",
    messagingSenderId: "868976388482",
    appId: "1:868976388482:web:c60c190c858f840af7479b"
  };
  

firebase.initializeApp(firebaseConfig);
export default firebase;