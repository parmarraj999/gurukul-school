import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnpQ11hj8R5qsu-AJGWtSfUuJ7KcUTiMU",
  authDomain: "gurukul-937ff.firebaseapp.com",
  projectId: "gurukul-937ff",
  storageBucket: "gurukul-937ff.appspot.com",
  messagingSenderId: "646076376110",
  appId: "1:646076376110:web:2ea9daf2328686c7e62bbf"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage , db };