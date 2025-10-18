import React from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Login With</h1>

            <div className='space-y-3 py-5'>
                <button className='btn w-full btn-outline btn-secondary text-md'>
                    <IoLogoGoogle size={20} />
                    <span>Login with Google</span>
                    </button>
                <button className='btn w-full btn-outline btn-primary text-md'>
                    <BsGithub size={20} />
                    <span>Login with Github</span>
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;