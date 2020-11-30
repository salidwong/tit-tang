import React from 'react'
import './style.css'

type Props = {
    email: string
    password: string

    onEmailChange: (email: string) => void
    onPasswordChange: (password: string) => void
    onLoginClick: () => void
}

export const LoginForm: React.FC<Props> = (props) => {
    const {
        email,
        password,
        onEmailChange,
        onPasswordChange,
        onLoginClick,
    } = props
    return (
        <div className="container">
            <div className="input-group">
                <p>Email</p>
                <input
                    className="input"
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                />
                <p>Password</p>
                <input
                    className="input"
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                />
            </div>

            <button onClick={onLoginClick}>login</button>
        </div>
    )
}
