import React from 'react'
import NavBar from '../Components/NavBar'
import Card from '../Components/Card'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-full w-full pl-10 pr-10 pt-8 sm:p-10 lg:p-20 ">
      <div>
        <div className='flex items-center justify-between  '>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">See the world</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">Know the world</h1>
            <p className='text-[16px] text-white/52 mt-1 mb-10 '>Interactive maps, fascinating facts, and endless discovery.</p>
            <Link to='/countries' className='h-12.75 w-47.25 bg-[#171717] rounded-full flex gap-2 items-center justify-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:bg-[#1f1f1f] ml-1 '>
              Start Explore
              <i className="ri-arrow-right-line"></i> 
            </Link>
          </div>
          <div className="hidden md:block ">
            <img src="/Heroimage.png" alt="" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center  mt-20 md:mt-40' >
          <div className='w-full max-w-150 px-4'>
            <p className='text-[34px] text-center font-bold mb-10'>Uncover the World's Greatest Highlights That Inspire Us All</p>
          </div>

          <div>
            <Card />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
