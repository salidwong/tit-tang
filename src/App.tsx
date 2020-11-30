import React from 'react'
import './App.css'
import firebase from 'firebase'
import { firebaseConfig } from './firebase/config'
import { Login } from './containers/login'

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const App: React.FC = () => {
    return (
        <div className="App">
            <Login />
        </div>
    )
}

export { App }
