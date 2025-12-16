import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CountryContex } from '../context/CountryContex';
import Loader from '../Components/Loader';

const CountriesDetails = () => {
  const {code} = useParams();
  const navigate = useNavigate();

  
  const {getCountry , singleLoad , singleC , error  } = useContext(CountryContex);

  useEffect(()=>{
    if(code){
      getCountry(code)
    }
    
  },[code , getCountry]);

  if(singleLoad){
    return <Loader />
  }

  if(error){
    return <p>There is an error !!</p>
  }

  const back = ()=>{
    navigate(-1)
  };

  return (
   
    <div className="h-full w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 overflow-y-auto">
      

      <button 
      className='mb-6 sm:mb-8 lg:mb-10 h-10 w-28 bg-[#171717] rounded-full flex gap-1 items-center justify-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:bg-[#1f1f1f]'
      onClick={back}
      >
        <i className="ri-arrow-left-s-line"></i>
        Back
      </button>

      <div className='mb-6 sm:mb-8 lg:mb-10'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold mb-2">Country Overview</h1>
        <p className='text-sm sm:text-base text-white/52 mt-1'>Interactive maps, fascinating facts, and endless discovery.</p>
      </div>


      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 relative">
        

        <div className="w-full lg:w-1/2 xl:w-[45%]">
          <img 
            src={singleC.flags.svg} 
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-2xl shadow-lg"
            alt={`${singleC.name.common} flag`}
          />
        </div>
 


        <div className="w-full lg:w-1/2 xl:w-[55%] bg-[#131313] rounded-2xl p-6 sm:p-8 lg:p-10">
          

          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white/70 mb-4 sm:mb-6'>
            {singleC.name.common}
          </h2>
          

          <div className='flex flex-col gap-3 sm:gap-4 text-sm sm:text-base'>
            
            <p>
              Native Names: <span className="text-white/60">{Object.values(singleC.name.nativeName || {}).map(n => n.common).join(', ')}</span>
            </p>

            <p>
              Population: <span className="text-white/60">{singleC.population.toLocaleString()}</span>
            </p>

            <p>
              Region: <span className="text-white/60">{singleC.region}</span>
            </p>

            <p>
              Sub Region: <span className="text-white/60">{singleC.subregion}</span>
            </p>

            <p>
              Capital: <span className="text-white/60">{singleC.capital?.[0]}</span>
            </p>

            <p>
              Top Level Domain: <span className="text-white/60">{singleC.tld?.[0]}</span>
            </p>

            <p>
              Currencies: <span className="text-white/60">{Object.values(singleC.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(', ')}</span>
            </p>

            <p>
              Languages: <span className="text-white/60">{Object.values(singleC.languages || {}).join(', ')}</span>
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default CountriesDetails