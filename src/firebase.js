import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAPJFXBx5WhaX2H4Q4db6m9R_mHWSKua0o',
  authDomain: 'netflix-clone-8b776.firebaseapp.com',
  projectId: 'netflix-clone-8b776',
  storageBucket: 'netflix-clone-8b776.appspot.com',
  messagingSenderId: '1039704444579',
  appId: '1:1039704444579:web:dce07a10d895f465cb7916',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
