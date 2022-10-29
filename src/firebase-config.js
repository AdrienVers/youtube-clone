import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXHDTEEwcCtRDDkCfvOgDP8ahOcfBicKk",
  authDomain: "cloneauth.firebaseapp.com",
  projectId: "cloneauth",
  storageBucket: "cloneauth.appspot.com",
  messagingSenderId: "583540031435",
  appId: "1:583540031435:web:463f835b9a98706281804e",
  measurementId: "G-DJJJ87RZ1M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
