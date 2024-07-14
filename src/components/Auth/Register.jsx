import React, { useState } from 'react';
import img1 from '../../assets/images/login-bg.jpg';
import AuthForm from './FormComponents/AuthForm';
import InputField from './FormComponents/InputField';
import DropdownField from './FormComponents/DropdownField';  // Import the new DropdownField component
import PasswordField from './FormComponents/PasswordField';  // Import the new PasswordField component
import SubmitButton from './FormComponents/SubmitButton';
import SocialButton from './FormComponents/SocialButton';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  // Add state for confirm password
  const [userType, setUserType] = useState('');  // Add state for the dropdown

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registering user:', { username, email, password, userType });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <AuthForm title="Create an Account" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          icon={<FaUser />}
          className="border-black"
        />
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          icon={<FaEnvelope />}
          className="border-black"
        />
        <PasswordField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-black"
        />
        <PasswordField
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border-black"
        />
        <DropdownField
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          options={[
            { value: 'driver', label: 'Driver' },
            { value: 'user', label: 'User' },
          ]}
          placeholder="Select your role"
          className="border-black"
        />
        <SubmitButton label="Sign Up" />
        <div className="text-center text-gray-600 mb-3">or</div>
        <div className="flex justify-between items-center mb-3">
          <SocialButton
            label="Sign up with Google"
            onClick={() => { /* Handle Google sign-in */ }}
            icon={<FaGoogle />}
            className="bg-blue-600 hover:bg-blue-700 text-white mr-2"
          />
          <SocialButton
            label="Sign up with Facebook"
            onClick={() => { /* Handle Facebook sign-in */ }}
            icon={<FaFacebookF />}
            className="bg-blue-900 hover:bg-blue-800 text-white ml-2"
          />
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <a href="/signin" className="hover:underline">Already have an account? Sign in</a>
        </div>
      </AuthForm>
    </div>
  );
};

export default Register;
