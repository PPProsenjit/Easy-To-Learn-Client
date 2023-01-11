import React, { useContext } from 'react';
import { useState } from 'react';
import {toast} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UsersContext';

const RegistrationPage = () => {
    const [error, setError] = useState(' ');
    const { createUser, profileEdit, setUserSignIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {

                const user = result.user;
                updateUserProfile(name, photoURL);
                console.log(user);
                toast.success('Registration Successfully done')
                setError('');
                form.reset();
            })
            .catch(error => {
                toast.error('check your information again!')
                console.error(error)
                setError(error.message);
                form.reset();
            })


    }
    const updateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,

        }
        profileEdit(profile)
            .then(() => {
                setUserSignIn(profile)
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-yellow-300">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Your photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <p className="text-xs text-center text-red-500">
                            {error}
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn hover:btn-success">Register</button>
                        </div>

                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link to='/login' rel="noopener noreferrer"  className="underline dark:text-gray-100">log in </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;