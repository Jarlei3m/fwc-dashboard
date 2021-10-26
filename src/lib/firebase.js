import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "fwc-dashboard.appspot.com",
  messagingSenderId: "1036058338826",
  appId: "1:1036058338826:web:da08dfd666c74af40e61f3",
};

const firebaseDb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
export default firebaseDb.database().ref();

// variáveis ambientes utilizadas
//   apiKey: "AIzaSyCPCZrjnPrKcMmeJSFgZ9KEb8QHawI1XYY",
//   authDomain: "fwc-dashboard.firebaseapp.com",
//   projectId: "fwc-dashboard",
