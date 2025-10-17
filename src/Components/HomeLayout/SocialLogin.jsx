import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Login With</h1>

            <div className='space-y-3 py-5'>
                <button className='btn w-full btn-outline btn-secondary text-md'>Login with Google</button>
                <button className='btn w-full btn-outline btn-primary text-md'>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;