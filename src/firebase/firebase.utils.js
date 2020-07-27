import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC02gCAhUV7FM3hrf7zncCaw9G3ZBPXLOs",
    authDomain: "a2z-database.firebaseapp.com",
    databaseURL: "https://a2z-database.firebaseio.com",
    projectId: "a2z-database",
    storageBucket: "a2z-database.appspot.com",
    messagingSenderId: "766536662891",
    appId: "1:766536662891:web:5bbbb0e192f1271863d62e",
    measurementId: "G-31PM0B9J8W"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef  = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log('something went wrong', error.message);
    }
  }
  return userRef;
};
  
firebase.initializeApp(config);

export const auth      = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select-account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;