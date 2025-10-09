import React, { useEffect, useState } from 'react';

const Installation = () => {
    let [app,setApp]=useState([])
    let [sortOder,setSortOder]=useState('none');
    useEffect(()=>{
 let saveList= JSON.parse( localStorage.getItem('installApp'))
 if (saveList) {
    setApp(...app,saveList)
}
},[])
if (!app.length)return <p className=' font-bold text-5xl text-center text-[gray]'> no data available</p>

 let sortedItem=(()=>{
      if (sortOder === 'size-asc') {
        return[...app].sort((a,b)=>a.size-b.size)
      }else if(sortOder === 'size-dasc'){
        return[...app].sort((a,b)=>b.size-a.size)

      }else{
      return  app
      }
    })()
    let handleRemove=(id)=>{
        let saveList= JSON.parse( localStorage.getItem('installApp'))
 let updatedList = saveList.filter(i=>i.id !== id );
    setApp(updatedList)
      localStorage.setItem('installApp', JSON.stringify(updatedList));
     
    }
    return (
        <div>
            <div className='text-center bg-gray-100 '>
                      <h1 className='text-[48px] font-bold mb-[15px]'>Your Installed Apps</h1>
                      <p className='text-[20px] text-[gray]'>Explore All Trending Apps on the Market developed by us
</p>
                     <div className='flex justify-between mt-[60px]'>
                        <p className='text-[24px] mb-[30px] font-semibold'>({app.length}) Apps Found</p>
                        
                         <label htmlFor="" className='form-control w-full max-w-xs '>

           <select value={sortOder} onChange={e=>setSortOder(e.target.value)} name="" id="">
            <option value="none">sort by Size</option>
            <option value="size-asc">low to high</option>
            <option value="size-dasc">high to low</option>
           </select>
            </label>
                     </div>
                     <div className='w-full flex flex-col justify-center items-center'>
{
    sortedItem.map(p=>(
     <div class="flex items-center mb-[10px] justify-between bg-white  rounded-xl shadow-sm px-4 py-3 w-[700px]">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 bg-gray-200 rounded-md">
        <img className='h-full w-full' src={p.image} alt="" />
    </div>

    
    <div>
      <h2 class="text-gray-800 text-start font-semibold">{p.title}</h2>
      <div class="flex items-center gap-3 text-sm text-gray-500">
        <div class="flex items-center gap-1 text-green-600">
         
          <span>{p.downloads}M</span>
        </div>

        <div class="flex items-center gap-1 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.46a1 1 0 00-1.175 0l-3.38 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118l-3.38-2.46c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          <span>{p.ratingAvg}</span>
        </div>

        <span>{p.size} MB</span>
      </div>
    </div>
  </div>

  <button onClick={()=>handleRemove(p.id)} class="bg-emerald-500 text-white px-4 py-1.5 rounded-md font-medium hover:bg-emerald-600 transition">
    Uninstall
  </button>
</div>


    ))
}
   </div>                
                      </div>
        </div>
    );
};

export default Installation;