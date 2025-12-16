import { useState } from "react";
import CountryCard from "../Components/CountryCard";
import Search from "../Components/Search";

const Countries = () => {

  const handleSelect = (item) => {
    setSelect(item);
    drop();
  }

  const manu = ["All", "Asia", "Europe", "Africa", "Americas"];
  const [select , setSelect] = useState("All");
  const [down , setDown] = useState(false);
  const [search , setSearch ] = useState("");


  


  const drop =()=>{
    setDown(!down);
  }




  return (
    <div className="h-full w-full pl-10 pr-10   sm:p-10 pt-10 lg:p-20 ">
      <div>
        <div>
          <h1 className="text-3xl sm:text-6xl md:text-5xl lg:text-6xl font-extrabold" >Countries of the World</h1>
          <p className='text-[16px] text-white/52 mt-4 mb-10 '>Your interactive guide to every country across the globe.</p>
        </div>

        <div className="flex  gap-5 relative flex-wrap items-center ">
          {/* search  */}
          <Search setSearch ={setSearch} />
          <div className="flex gap-4 ">
            <div 
            className="h-12 w-fit px-6 gap-2 rounded-full bg-[#171717] flex items-center justify-center cursor-pointer"
            onClick={drop}
            >
              <i className="ri-arrow-down-s-fill"></i>
              <p>{select}</p>

              {/* dropdown  */}
              <div

              className={`bg-[#171717] h-fit w-40 rounded-2xl p-5 absolute top-15    ${down? "on": "off"} `}>
               
                {manu.map((item)=>(
                  <p 
                  className="dropdown-item hover:bg-[#242424] h-full p-2 rounded cursor-pointer"
                  key={item}
                  onClick={()=> handleSelect(item) }
                  >{item}</p>

                ))}
              
              </div>

            </div>  
          </div>
        </div>
      </div>
      
      <div >
        <CountryCard select={select} search={search}  />
      </div>

    </div>
  )
}

export default Countries
