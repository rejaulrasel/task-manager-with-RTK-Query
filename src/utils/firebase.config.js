import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClxD1OR6oHc_UiAi1WYihsp4iF5rPPcfE",
  authDomain: "task-master-redux-5227c.firebaseapp.com",
  projectId: "task-master-redux-5227c",
  storageBucket: "task-master-redux-5227c.appspot.com",
  messagingSenderId: "870637994873",
  appId: "1:870637994873:web:1e4c767d6dbf407cbc25a8"
};


export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


