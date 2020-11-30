import React, { useEffect, useState } from 'react'
import './App.css'
import firebase from 'firebase'
import { firebaseConfig } from './firebase/config'

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const App: React.FC = () => {
    const database = firebase.database()

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState()
    const [input, setInput] = useState('')
    const [email] = useState('test@gmail.com')
    const [password] = useState('123456')

    useEffect(() => {
        const ref = database.ref('user')
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('login', user)
            })
            .catch((error) => {
                console.log('error', error)
            })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('user sign in', user.uid)
            } else {
                console.log('user sign out')
            }
        })

        ref.on('value', (snapshot) => setUser(snapshot.val()))
    }, [])

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInput(e.target.value)
    }
    const handleButtonClick = (): void => {
        const userRef = database.ref('user')

        userRef.update({ test: { firstName: 'testttt' } })
    }

    return (
        <div className="App">
            <input value={input} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>click</button>
        </div>
    )
}

export { App }
