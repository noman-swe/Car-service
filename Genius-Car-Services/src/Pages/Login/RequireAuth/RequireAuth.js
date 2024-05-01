import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        // show loading component
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your email is not Verified!!</h3>
            <h5 className='text-success'> Please Verify your email address.</h5>
            <button
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent email');
                    }
                }}
            >
                Verify email again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;