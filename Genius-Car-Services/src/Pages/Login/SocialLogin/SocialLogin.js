import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../../images/logos/google-logo.png';
import fbLogo from '../../../images/logos/fb.png';
import githubLogo from '../../../images/logos/github.png';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || errorGit) {
        errorElement = <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
    }

    if (loading || loadingGit) {
        return <Loading></Loading>
    }

    if (user || userGit) {
        navigate('/home');
    }

    return (
        <div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                <p className='' style={{ marginTop: '12px' }}>Or</p>
                <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
            </div>
            <div className="social-links">
                <Button onClick={() => signInWithGoogle()} className='btn social-btn-google text-oranged w-100' type="submit">
                    Google Sign in <img height={25} src={googleLogo} alt="" />
                </Button>
                <Button className='mt-3 btn social-btn-fb text-oranged w-100' type="submit">
                    Facebook Sign in <img height={25} src={fbLogo} alt="" />
                </Button>
                <Button onClick={() => signInWithGithub()} className='mt-3 btn social-btn-github text-oranged w-100' type="submit">
                    Github Sign in <img height={25} src={githubLogo} alt="" />
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;