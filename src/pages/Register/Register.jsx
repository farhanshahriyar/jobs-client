/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import registerLogo from '../../assets/images/register.svg';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState(''); 
  const navigate = useNavigate();
  const {createUser, updateUser, googleSignIn} = useContext(AuthContext)

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
    .then((result) => {
      // console.log(result.user)
      const user = result.user;
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You are logged in successfully!',
      });
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode, errorMessage)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      });
      setRegisterError(error.message);
    });
  }
  

  const registerHandler = (e) => {
    e.preventDefault();
    // console.log('register button tip porse mama');
    const form = e.target
    const photo= form.photo.value
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)
    setRegisterError('');


        // add validation
        if (password.length < 6) {
          // toast.error('Password must be at least 6 characters long!');
          setRegisterError('Password must be at least 6 characters long!');
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Password must be at least 6 characters long!',
            })
          return;
      }

      // password validation
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          // toast.error('Password must contain 2 upper case');
          setRegisterError('Password must contain 2 upper case');
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Password must contain 2 upper case!',
            })
          return;
      }

      // special character validation
      if (!/(?=.*[!@#$&*;])/.test(password)) {
          // toast.error('Password must contain 1 special character');
          setRegisterError('Password must contain 1 special character');
          Swal.fire({ 
              icon: 'error',
              title: 'Oops...',
              text: 'Password must contain 1 special character!',
            })
          return;
      }


    createUser(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // localStorage.setItem('user', JSON.stringify(user)) 
        updateUser(name, photo).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Welcome to Jobs!',
          })
          navigate('/')
        })
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        setRegisterError(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        // ..
    });
}

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="flex lg:flex-row items-center w-full lg:max-w-4xl">
      <div className="flex-1 hidden lg:block">
        <img src={registerLogo} alt="Workflow" className="max-w-xs mx-auto" />
      </div>
      <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-2xl">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Welcome To Jobs
          </h2>
          <form className="mt-8 space-y-6" onSubmit={registerHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="font-normal text-base text-[#111827]">
                  User name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="your username"
                />
              </div>
              <div>
                <label htmlFor="photo" className="font-normal text-base text-[#111827]">
                  Photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="your photo url"
                />
              </div>
           
                <br></br>
              <div>
                <label htmlFor="email-address" className="font-normal text-base text-[#111827]">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="password" className="font-normal text-base text-[#111827]">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={ showPassword ? "text" : "password" }
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input onClick={() => setShowPassword(!showPassword)}
                  id="showPassword"
                  name="showPassword"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-900">
                  Show Password
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#2563EB] hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
              <div className="mt-2 mb-2 text-center">
            <p className="text-sm text-gray-600">
              or continue with 
            </p>
          </div>
              <button onClick={handleGoogleSignIn}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in with Google
              </button>
            </div>
          </form>
          {
                registerError && <p className="mt-4 text-center text-sm text-red-600">{registerError}</p>
              
            }
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already a member?{' '}
              <a href="/login" className="font-medium text-[#2563EB] hover:text-blue-500">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
