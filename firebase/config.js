import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQhBmT4fmdir1071MEwSgKfUg-BHVxXWE",
  authDomain: "postsapp2023.firebaseapp.com",
  projectId: "postsapp2023",
  storageBucket: "postsapp2023.appspot.com",
  messagingSenderId: "1071612562525",
  appId: "1:1071612562525:web:76685992ce4d24eb7351b4",
  measurementId: "G-DLE02W8WGB",
};

const authConfig = initializeApp(firebaseConfig);

export { authConfig };