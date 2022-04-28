// functionality with firebase ...........
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB4szseVWqmHpjRn9S7zdicQm1_BGO0Do0",
  // authDomain: "loginform-84758.firebaseapp.com",
  // databaseURL: "https://loginform-84758-default-rtdb.firebaseio.com",
  // projectId: "loginform-84758",
  // storageBucket: "loginform-84758.appspot.com",
  // messagingSenderId: "386084226707",
  // appId: "1:386084226707:web:8bf6ef506ca8c92c292f66",

  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRBASE_,
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);
export default fire;

//  .env
// console.log(process.env);
