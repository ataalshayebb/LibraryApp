import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyB2o8jD5-SsVrlzI6g8KAve9fmMMV31mu0",
    authDomain: "reacttask-2bf93.firebaseapp.com",
    databaseURL: "https://reacttask-2bf93-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reacttask-2bf93",
    storageBucket: "reacttask-2bf93.appspot.com",
    messagingSenderId: "271369825259",
    appId: "1:271369825259:web:8af34facfa41f218d887ae",
    measurementId: "G-EP4FHGLTDC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 return getDatabase(app);
}

export default StartFirebase;