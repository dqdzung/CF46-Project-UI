import firebase from "firebase/app";
import "firebase/firebase-storage";

const firebaseConfig = {
	apiKey: "AIzaSyATYkAU4WRhYWsjkC5gp9IH-PWRUZwV3eE",
	authDomain: "cf-46-95878.firebaseapp.com",
	projectId: "cf-46-95878",
	storageBucket: "cf-46-95878.appspot.com",
	messagingSenderId: "1019714483743",
	appId: "1:1019714483743:web:c6a401c674e0822003472a",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
