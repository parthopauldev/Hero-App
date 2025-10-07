import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <Header></Header>
            <div className='flex-1  max-w-screen-2xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;