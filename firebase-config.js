const firebaseConfig = {
  apiKey: "AIzaSyCyQWxW-3gsvN7zI4YYIVw1sUVOreBCdbc",
  authDomain: "project-be13b.firebaseapp.com",
  databaseURL: "https://project-be13b-default-rtdb.firebaseio.com",
  projectId: "project-be13b",
  storageBucket: "project-be13b.firebasestorage.app",
  messagingSenderId: "724859412186",
  appId: "1:724859412186:web:2a5ef9d65d7c307c870fe3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const logsRef = db.ref("logs");
const guardsRef = db.ref("guards");
