// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaOajppAvbOGTpt6doLefPUPcyXhAV8Cc",
    authDomain: "sample-98a38.firebaseapp.com",
    projectId: "sample-98a38",
    storageBucket: "sample-98a38.appspot.com",
    messagingSenderId: "654617735780",
    appId: "1:654617735780:web:c0193cc1c383f78ba72571",
    measurementId: "G-TG2SF6M20J"
  };

firebase.initializeApp(firebaseConfig);
var email ='ms471841@gmail.com';
var password = 123435678;
function signUp(email,password)
{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
}