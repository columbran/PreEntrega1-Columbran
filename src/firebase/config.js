import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWBfu40NAjzqtdFfcwm32C1gZp_y_ZHvQ",
  authDomain: "ecommerce-silviocolumbran.firebaseapp.com",
  projectId: "ecommerce-silviocolumbran",
  storageBucket: "ecommerce-silviocolumbran.appspot.com",
  messagingSenderId: "314294927154",
  appId: "1:314294927154:web:520195bc95a284bbe4e12b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app 