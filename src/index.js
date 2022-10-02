import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB6aY3eU2UoeXqn9VbEzXYTL6F44_BAGPU",
authDomain: "tuvinito-28b05.firebaseapp.com",
projectId: "tuvinito-28b05",
storageBucket: "tuvinito-28b05.appspot.com",
messagingSenderId: "1073772961758",
appId: "1:1073772961758:web:9f6365f63f2e5470d1874f"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


