import data from '../API/CountryData.json';

const Card = () => {

  return (
    <div className='flex flex-wrap gap-3'>
      {data.map((country)=>(
        <div key={country.id} className='h-64 w-96 max-w-[calc(100vw-2rem)] bg-[#131313] rounded p-5 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:bg-[#1f1f1f] overflow-hidden'>
          <h2 className='text-[24px] font-bold mb-4'>{country.countryName}</h2>
          <div>
              <p className='text-[16px] font-bold text-white/52 mb-2'>Capital: <span className='font-medium text-white'>{country.capital}</span> </p>
              <p className='text-[16px] font-bold text-white/52 mb-2'>Population: <span className='font-medium text-white'>{country.population}</span> </p>
              <p className='text-[16px] font-bold text-white/52 mb-2'>Interesting Fact: <span className='font-medium text-white'>{country.interestingFact}</span> </p>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Card