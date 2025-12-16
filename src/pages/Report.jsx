import React from 'react'

const Report = () => {

  const SubmitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className="h-full w-full pl-10 pr-10 pt-8 sm:p-10 lg:p-20 " >

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
  
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          
          {/* Top label */}
          <div className="flex mb-4 gap-4 items-center">
            <p className=" font-medium text-sm text-white/52">
              Help Us Improve
            </p>
            <img src="Line 1.png" alt="" />
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold">
            Welcome to AtlasNow’s
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Bug Report.
          </h1>

          {/* Description block */}
          <div className="flex gap-4 mt-8 ml-0 sm:mt-10  sm:ml-20">
            
            {/* Vertical line */}
            <div className="hidden sm:block h-28 w-0.5 bg-white"></div>

            <div>
              <p className="text-sm text-white/52">
                Your feedback helps us make global
              </p>
              <p className="text-sm text-white/52">
                exploration better for everyone.
              </p>

              <button className="mt-5 h-12 w-36 border border-white transition-all duration-300 hover:bg-[#90BA52] hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="/Report.png"
          alt="Bug Report Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md hidden sm:block"
        />
      </div>

      <div className='mt-40'>
        <h2 className='text-[36px] font-light text-white/52 mb-5' >Quick Bug Report</h2>
        <form action="" onSubmit={SubmitHandler}>
          <div className='flex flex-col gap-2'>
            <label className='ml-2' htmlFor="Name">Name</label>
            <input 
            type="text" placeholder='Enter your name '
            className="w-full sm:w-80 md:w-96 h-12 px-5 bg-[#171717] text-white rounded-full transition-colors duration-300 hover:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-[#90BA52]"
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2' htmlFor="Bug">Issue</label>
            <input 
            type="text" placeholder='Bug / Error  '
            className="w-full sm:w-80 md:w-96 h-12 px-5 bg-[#171717] text-white rounded-full transition-colors duration-300 hover:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-[#90BA52]"
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2' htmlFor="Bug">Issue</label>
            <textarea 
            type="text" placeholder='Bug / Error  '
            className="w-full sm:w-80 md:w-96 h-40 px-5 py-3 bg-[#171717] text-white rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-[#90BA52]"
            />
          </div>

          <button className=" mt-5 w-full sm:w-80 md:w-96 h-12 px-5 bg-[#171717] text-white rounded-full transition-colors duration-300 hover:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-[#90BA52]">
            Report
          </button>

        </form>
      </div>


      
      
    </div>
  )
}

export default Report
