import firebase from "firebase";

const config = {
	apiKey: "AIzaSyCevTCJzFiZDI-FZEwdqhS4JMqzLwpzkaY",
	authDomain: "vue-chat-7b66d.firebaseapp.com",
	databaseURL: "https://vue-chat-7b66d.firebaseio.com",
	projectId: "vue-chat-7b66d",
	storageBucket: "vue-chat-7b66d.appspot.com",
	messagingSenderId: "727701747415"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
