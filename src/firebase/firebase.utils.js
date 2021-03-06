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

  firebase.initializeApp(config);

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
  
// export const addCollectionAndDocuments = async (collectionKey, collectionData) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();

//   collectionData.forEach(obj => {
//     newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);    
//   });

//   return await batch.commit();
// }

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items
    }
  });
  return transformedCollection.reduce((accumulator, collections)=> {accumulator[collections.title.toLowerCase()]=collections; return accumulator;} , {})
}

export const auth      = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select-account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;