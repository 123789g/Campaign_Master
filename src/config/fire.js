// import Rebase from 're-base'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDReqvWV92DNRZi3yDZE3-G09eBnJptXBM',
  authDomain: 'campaign-master-f41cf.firebaseapp.com',
  databaseURL: 'https://campaign-master-f41cf.firebaseio.com',
  projectId: 'campaign-master-f41cf',
  storageBucket: 'campaign-master-f41cf.appspot.com',
  messagingSenderId: '981943382113',
  appId: '1:981943382113:web:c30a785ce178de6f'
}

const fire = firebase.initializeApp(firebaseConfig)

// const base = Rebase.createClass(fire.database())

// export { base }

export default firebase
