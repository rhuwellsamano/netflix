import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB7vJ_HXh4R0i5mC0zsy4qfM--n0Ece8_I',
  authDomain: 'netflix-70184.firebaseapp.com',
  databaseURL: 'https://netflix-70184.firebaseio.com',
  projectId: 'netflix-70184',
  storageBucket: 'netflix-70184.appspot.com',
  messagingSenderId: '535629691144',
  appId: '1:535629691144:web:8edcbb3db39fb280f054bd',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
