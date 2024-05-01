import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [agree, setAgree] = useState(false);
    const [updateProfile, updating, errorOfUpdate] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegisterForm = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return `Hi Mr. ${name}, you got a error`;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated Profile');
        navigate('/home');
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log('User:', user);
    }

    return (
        <div className="register-form mx-auto w-50">
            <h3 className='text-center mt-4 color-oranged'>Please Register</h3>

            <form onSubmit={handleRegisterForm} className='form-submit'>
                <div className="form-group w-50 mx-auto">
                    {/* <label>Name</label> */}
                    <input className='d-block w-100 mx-auto' type="text" name="name" id="name" placeholder='Your Name' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    {/* <label>Email</label> */}
                    <input className='d-block w-100' type="email" name="email" id="email" placeholder='Your Email' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto">
                    {/* <label>Password</label> */}
                    <input className='d-block w-100' type="password" name="password" id="password" placeholder='Your Password' autoComplete='on' required />
                </div>

                <div className="form-group w-50 mx-auto
                ">
                    {/* <label>Confirm Password</label> */}
                    <input className='d-block w-100' type="password" name="confirmPassword" id="confirm-password" placeholder='Your Confirm Password' autoComplete='on' required />
                </div>

                <div className="w-50 mx-auto">
                    <input onClick={() => setAgree(!agree)} className='me-2' type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'text-success' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions.</label>
                </div>

                <div className="w-50 mx-auto">
                    <input disabled={!agree} type="submit" className={`mt-3 w-100 btn-submit ${!agree ? 'disabled-bg' : ''}`} value="Register" title={`${!agree ? "Button is desabled, To enable accept genius car's Terms and Condition." : ""}`} />
                </div>

                <p className='text-center mt-3'>
                    New to Genius Car? <Link to={'/login'} className='text-oranged navigate-register-btn text-decoration-none' onClick={navigateToLogin}>Please Login</Link>
                </p>
            </form>
            <div className="w-50 mx-auto mb-4">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
}

export default Register;