import React from 'react';

import UseApps from '../Hooks/UseApps';
import AppCard from '../Components/AppCard';
import Banner from '../Components/Banner';
import { Link } from 'react-router';
const Home = () => {
  const { apps, loading, error } = UseApps();

  if (loading) return <span className="loading loading-dots loading-xl"></span>
;

let homePageApps=apps.slice(0,8);

    return (
        <div className='text-center bg-gray-100'>
            <Banner/>
                      <h1 className='text-[48px] font-bold mb-[15px]'>Our All Applications</h1>
                      <p className='text-[20px] text-[gray]'>Explore All Trending Apps on the Market developed by us

</p>
                     
                      <div className='bg-gray-100 mt-[50px] gap-2 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                        {
                            homePageApps.map((app)=>(
                                <AppCard key={app.id} app={app}></AppCard>
                            ))
                        }
                      </div>
                      <Link to='/App' className='btn font-semibold bg-gradient-to-r from-[#6f42c1] to-[#4f7df0] px-[30px]  mt-[20px] text-[24px] text-white'>Show All</Link>
                      </div>
    );
};

export default Home;