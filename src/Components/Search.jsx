import React from 'react'

const Search = ({search , setSearch}) => {


  return (
    <div >
        <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-12 sm:h-14 rounded-full flex items-center px-4 gap-3 bg-[#171717]'>
            <i className="ri-search-line"></i>
            <input type="text" 
            placeholder='Search For Countries'
            value={search}
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            className="border-none text-[16px] w-full h-full outline-none focus:outline-none focus:ring-0 bg-transparent"
            />

        </div>
    </div>
  )
}

export default Search
