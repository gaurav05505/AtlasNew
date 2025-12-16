import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const [toggle , setToggle] = useState(false);

    const manu =() =>{
        setToggle(!toggle);
    }

    const handleMenuClick = () =>{
      setToggle(!toggle);
    }



  return (
    <div className='w-full flex pt-5 pl-5 pr-5  justify-center'>
      <div className=" w-[94%] rounded-full flex items-center justify-between
      p-2 sm:p-4 md:pl-12 md:pr-12 md:pt-7 md:pb-5 bg-transparent md:bg-[#171717]" >
        {/* logo  */}
        <div className='flex gap-3'>
            <img className='text-[30px]' src="/Logo.svg" alt="" />
            <NavLink to='/' className='text-[20px] font-extrabold'>AtlasNow</NavLink>
        </div>

        {/* manu  */}
        <div className={`flex gap-7 ${toggle? "Mobile": "web"}`}>
            <NavLink  to='/' end className='navlink' onClick={handleMenuClick}  >Home</NavLink>
            <NavLink to='/about' className='navlink' onClick={handleMenuClick} >About</NavLink>
            <NavLink to='/Countries' className='navlink' onClick={handleMenuClick} >Countries</NavLink>
            <NavLink to='/Report' className='navlink' onClick={handleMenuClick} >Report Bug</NavLink>
        </div>

        <div className='mob-manu'>
            <button onClick={manu}>
                <img src="/manu.svg" alt="" />
            </button>
        </div>

      </div>
    </div>
  )
}

export default NavBar
