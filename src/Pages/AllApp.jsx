import React, { useState } from 'react';
import UseApps from '../Hooks/UseApps';
import AppCard from '../Components/AppCard';

const AllApp = () => {
  


     const { apps, loading, error } = UseApps();
 let [search,setSearch]=useState('')
    let searchWord=search.trim().toLocaleLowerCase();
    
    let searchApps = searchWord ? apps.filter(app => app.title.toLocaleLowerCase().includes(searchWord)) : apps;

  if (loading) return <span className="loading loading-dots loading-xl"></span>
;


    return (
        <div>
            <div className='text-center bg-gray-100'>
                      <h1 className='text-[48px] font-bold mb-[15px]'>Trending Apps</h1>
                      <p className='text-[20px] text-[gray]'>Explore All Trending Apps on the Market developed by us</p>
                     <div className='flex justify-between mt-[40px]'>
                        <p className='text-[24px] font-semibold'>({searchApps.length}) Apps Found</p>
                        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search"  value={search} onChange={(e)=>setSearch(e.target.value)} required placeholder="Search App" />
</label>
                     </div>
                      <div className='bg-gray-100 mt-[20px] gap-2 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                        {
                        searchApps.length > 0? searchApps.map((app)=>(
                                <AppCard key={app.id} app={app}></AppCard>
                            )):<div className="col-span-4 flex justify-center items-center h-[300px]">
  <h1 className="text-gray-400 text-[40px] font-semibold">
    No App Found
  </h1>
</div>

                        }
                      </div>
                      </div>
        </div>
    );
};

export default AllApp;