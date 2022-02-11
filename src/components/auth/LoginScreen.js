import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }


    return (
        <>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleLogin}>
                <p className="flex justify-center items-center text-lg font-bold mb-2">Login</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder=""
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center justify-between mb-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={loading}>
                        Sign In
                    </button>
                    <Link
                        to="/auth/register"
                        className="link"
                    >
                        <div className="bg-blue-500 hover:bg-blue-700 text-white mx-3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create  account
                        </div>
                    </Link>
                </div>
                <hr className='w-full border-t border-gray-300' />
                <div className="items-center justify-between mt-3">
                    <div className="flex justify-center items-center">
                        <div
                            className="google-btn"
                            onClick={handleGoogleLogin}
                        >
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                                <b>Sign in with google</b>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
