import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDBuQ1AtjHYyog6rpCIBaWet68dp5RJv3Y",
    authDomain: "red-social-4d185.firebaseapp.com",
    databaseURL: "https://red-social-4d185.firebaseio.com",
    projectId: "red-social-4d185",
    storageBucket: "red-social-4d185.appspot.com",
    messagingSenderId: "1044161778600"
  };

const firebaseConf =  firebase.initializeApp(config);

export default firebaseConf;