import firebase from 'firebase/app'
import { firebase as firebaseConfig } from 'app/config/firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export default firebase
