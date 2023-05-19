import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ users, setLogUser }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [formError, setFormError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
        setFormError('');
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
        setPassError('');
        setFormError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Find the user by email
        const user = users.find((user) => user.email === email);

        if (email.trim() === '') {
            setEmailError('Email is required!');
            return;
        }

        if (pass.trim() === '') {
            setPassError('Password is required!');
            return;
        }
        if (!user) {
            setEmailError('User does not exist!');
            return;
        }

        if (user.password !== pass) {
            setPassError('Password does not match!');
            return;
        }

        // Successful login
        setLogUser(user);

        // Clear the input fields
        setEmail('');
        setPass('');

        navigate('/games');
    }
    return (
        <div className='login-page'>
            <div className='background-circles'>
                <div className='log-shape'></div>
                <div className='log-shape'></div>
            </div>
            <div className='form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <h3>Login</h3>
                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email Id'
                        onChange={handleEmailChange}
                    />
                    {emailError && <span className='error'>{emailError}</span>}

                    {/* Password Input */}
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        name='password'
                        value={pass}
                        placeholder='*****'
                        onChange={handlePasswordChange}
                    />
                    {passError && <span className='error'>{passError}</span>}

                    <button type='submit'>Log In</button>
                    {formError && <span className='error'>{formError}</span>}

                    <button className='link-btn' onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
                </form>
            </div>
        </div>
    )
}

export default Login