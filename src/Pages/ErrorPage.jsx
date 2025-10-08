import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error-404.png'
const ErrorPage = () => {
    return (
         <div className='min-h-screen flex items-center justify-center'>
          
            <div className='text-center'>
             
                <img className='block mx-auto' src={errorImg} alt="404 Error" />
                
                <div className='text-2xl font-semibold mt-4 mb-2'>Oops, page not found!</div>
                <p className='text-gray-600 mb-6'>The page you are looking for is not available.</p>
                
                <Link 
                    to='/App' 
                    className="btn bg-gradient-to-r from-[#6f42c1] to-[#4f7df0] text-white px-6 py-3 rounded-lg font-medium shadow-lg "
                >
                    Go Back
                </Link>
            </div>
        </div>
    );

};

export default ErrorPage;