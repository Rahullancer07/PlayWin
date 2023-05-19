import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = ({ setLogUser, users, addUsers }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError , setNameError] = useState('');
  const [passError, setPassError] = useState('');
  const [formError, setFormError] = useState('');

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    setEmailError('');
    setNameError('');
    setPassError('');
    setFormError('');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setNameError('');
    setPassError('');
    setFormError('');
  }

  const handlePassChange = (e) => {
    setPass(e.target.value);
    setEmailError('');
    setNameError('');
    setPassError('');
    setFormError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Check if email already exists in the user list
    const isEmailExists = users.some((user) => user.email === email);

    if (isEmailExists) {
      setEmailError('Email already exists!');
      hasError = true;
    }
    if (fullName.trim() === '') {
      setNameError('Name is required!');
      hasError = true;
    }

    if (email.trim() === '') {
      setEmailError('Email is required!');
      hasError = true;
    }

    if (pass.trim() === '') {
      setPassError('Password is required!');
      hasError = true;
    }

    if (hasError) {
      setFormError('Please fix the errors.');
    } else {
      // Create a new user object with email and password
      const newUser = {
        name: fullName,
        email: email,
        password: pass,
      };
      setLogUser(newUser);
      // Add the new user to the user list
      addUsers([...users, newUser]);

      // Clear the input fields
      setFullName('');
      setEmail('');
      setPass('');

      // Log the updated user list
      console.log('User List:', users);
      navigate('/games');
    }

  };

  return (
    <div className='reg-page'>
      <div className='background-circles'>
        <div className='reg-shape'></div>
        <div className='reg-shape'></div>
      </div>
      <div className='form-container'>
        <form className='registration-form' onSubmit={handleSubmit}>
          {/* Name Input */}
          <h3>Register</h3>
          <label htmlFor='name'>Full Name</label>
          <input
            id='name'
            value={fullName}
            placeholder='Enter your Full Name'
            onChange={handleNameChange}
          />
          {nameError &&  <span className='error'>{nameError}</span>}

          {/* Email Input */}
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
            onChange={handlePassChange}
          />
          {passError &&  <span className='error'>{passError}</span>}

          <button className='register_btn' type='submit'>Register</button>
          {formError && <span className='error'>{formError}</span>}
          <button className='login-link-btn' onClick={() => navigate('/')}>Already have an account? Login here.</button>
        </form>
      </div>
    </div>
  )
}

export default Registration