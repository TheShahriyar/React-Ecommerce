import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyBqJZ2xZr-V4uR3_kEc7bF5VW2_lFHO7NU",
	authDomain: "ecommerce-8d966.firebaseapp.com",
	databaseURL: "https://ecommerce-8d966.firebaseio.com",
	projectId: "ecommerce-8d966",
	storageBucket: "ecommerce-8d966.appspot.com",
	messagingSenderId: "466966246735",
	appId: "1:466966246735:web:09d6ab6df44db6f933413a",
	measurementId: "G-2CFL831D8M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}

	return userRef;
};
