// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnxNnthygqjfLL3NxMBpkagXRuuu0Xjso',
  authDomain: 'farmacia-9b457.firebaseapp.com',
  projectId: 'farmacia-9b457',
  storageBucket: 'farmacia-9b457.appspot.com',
  messagingSenderId: '487746226588',
  appId: '1:487746226588:web:a38c6fd9db9ab1ad1d6059',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const $db = getFirestore(app)

export { $db }
