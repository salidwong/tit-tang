import React, { useState } from 'react'
import { LoginForm } from '../components/loginForm'
import firebase from 'firebase'

export const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginClick = (): void => {
        console.log('in click')
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('response', response.user?.uid)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    return (
        <div>
            <LoginForm
                email={email}
                password={password}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
                onLoginClick={handleLoginClick}
            />
        </div>
    )
}
