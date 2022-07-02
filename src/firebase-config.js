import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// import {getDatabase, ref} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyAt6eW0qkRTdZehH49f6B09jcbuLhmEMJQ",
    authDomain: "playground-fdda0.firebaseapp.com",
    databaseURL: "https://playground-fdda0-default-rtdb.firebaseio.com",
    projectId: "playground-fdda0",
    storageBucket: "playground-fdda0.appspot.com",
    messagingSenderId: "204182742724",
    appId: "1:204182742724:web:f66637410d3ba6b4970b91"
    };
const app = initializeApp(firebaseConfig);
const db =  getDatabase();
// export const start_times = ref(db,"0");
// export const jammat_times = ref(db,"1")

const dbRef = ref(db);
export const  val = get(child(dbRef, "0")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});