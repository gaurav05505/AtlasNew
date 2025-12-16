import { useContext } from "react"
import { CountryContex } from "../context/CountryContex"
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Countries from "../pages/Countries";



const CountryCard = ({select , search} ) => {

  const {cntr , loding , error } = useContext(CountryContex);

  if(loding){
    return <Loader />
  }

  if(error){
    return <p>There is an error !!</p>
  }


  const searchCountry = (Country) =>{
    if(search){
      return Country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return cntr;
  }

  const filterRegion = (Country) =>{
    if(select === "All"){
      return true;
    }
    return Country.region === select;
  }

  const filterCountries = cntr.filter((Country) => searchCountry(Country) && filterRegion(Country))



  return (
    <div className="mt-14 flex  gap-4 flex-wrap justify-center">
      {filterCountries.map((Country)=>(
        <div
        key={Country.cca3}
        className="
          w-full sm:w-88 md:w-[24rem]
          bg-[#181818]
          rounded-xl
          p-4 sm:p-6 md:p-7
          border border-[#474747]
          transition-all duration-300 ease-out
          hover:scale-[1.03] hover:shadow-xl hover:bg-[#101010]
        "
      >
          {/* Flag image */}
          <img
            src={Country.flags.svg}
            alt={Country.name.common}
            className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-xl"
          />

          <div>
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mt-4">
              {Country.name.common}
            </h2>

            <div className="mt-3 sm:mt-4 mb-4">
              <p className="text-[14px] sm:text-[15px] font-medium text-white/52 mb-2">
                Population: <span className="font-medium text-white">{Country.population.toLocaleString()}</span>
              </p>

              <p className="text-[14px] sm:text-[15px] font-medium text-white/52 mb-2">
                Region: <span className="font-medium text-white">{Country.region}</span>
              </p>

              <p className="text-[14px] sm:text-[15px] font-medium text-white/52 mb-2">
                Capital: <span className="font-medium text-white">{Country.capital?.[0]}</span>
              </p>
            </div>

        
              <Link to={`/details/${Country.cca3}`}
              className="
                h-9 w-full text-[13px] sm:text-[14px]
                bg-[#1F1F1F]
                rounded-full
                flex gap-2 items-center justify-center
                transition-all duration-300 ease-out
                hover:scale-[1.03] hover:shadow-xl hover:bg-[#242424]
              "
              >
              Read More
              <i className="ri-arrow-right-line"></i>
              </Link>
              
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default CountryCard
