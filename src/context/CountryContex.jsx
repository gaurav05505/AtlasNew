import { createContext, useCallback, useEffect, useState } from "react"
import api from "../API/Axios.js";


export const CountryContex = createContext();

const CountryProvider = ({children}) => {

    const [cntr , setCntr] = useState([]);
    const [loding , setLoading] = useState(true);
    const [error , setError] = useState(null);


    const [singleC , setSingleC] = useState(null);
    const [singleLoad , setSingleLoad] = useState(true);

    // All countries page data 
    useEffect(()=>{
        const fitchData = async() =>{
            try {
                const res = await api.get(
                    "/all?fields=name,flags,population,region,capital,cca3"
                );

                setCntr(res.data)

            } catch (error) {
                setError("There is an error for the data!! ")
            }finally{
                setLoading(false);
            }
        };

        fitchData();
    }, []);

    // country details page for single country 
     const getCountry = useCallback(async(cca3) =>{
        try {
            const res = await api.get(
                `/alpha/${cca3}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages`
            );

            setSingleC(res.data)

        } catch (error) {
            setError("There is an error for the data!! ")
        }finally{
            setSingleLoad(false);
        }
    },[]);




    return (
        <CountryContex.Provider
        value={{
            cntr , 
            error,
            loding,
            singleC,
            singleLoad,
            getCountry,
        }}
        >
            {children}
        </CountryContex.Provider>
  )
}

export default CountryProvider; 

