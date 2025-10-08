import React from 'react';

import UseApps from '../Hooks/UseApps';
import AppCard from '../Components/AppCard';
import Banner from '../Components/Banner';
const Home = () => {
  const { apps, loading, error } = UseApps();

  if (loading) return <p>Loading...</p>;

let homePageApps=apps.slice(0,8);

    return (
        <div className='text-center bg-gray-100'>
            <Banner/>
                      <h1 className='text-[48px] font-bold mb-[15px]'>Our All Applications</h1>
                      <p className='text-[20px] text-[gray]'>Explore All Trending Apps on the Market developed by us

</p>
                     
                      <div className='bg-gray-100 mt-[50px] gap-2 grid grid-cols-4'>
                        {
                            homePageApps.map((app)=>(
                                <AppCard key={app.id} app={app}></AppCard>
                            ))
                        }
                      </div>
                      </div>
    );
};

export default Home;