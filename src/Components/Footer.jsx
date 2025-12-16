import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="
        w-full bg-[#0E0E0E]
        mt-16 sm:mt-20
        px-6 sm:px-10 lg:px-50
        py-10
    ">
      <div className="
        flex flex-col gap-10
        md:flex-row md:justify-between md:items-start
      ">

        {/* Logo */}
        <div className="flex gap-3 items-center">
          <img className="h-5" src="/Logo.svg" alt="AtlasNow Logo" />
          <NavLink to="/" className="text-[20px] font-extrabold text-white">
            AtlasNow
          </NavLink>
        </div>

        {/* Website Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-white/70">Website</h2>
          <NavLink to="/" end className="navlink">Home</NavLink>
          <NavLink to="/about" className="navlink">About</NavLink>
          <NavLink to="/countries" className="navlink">Countries</NavLink>
          <NavLink to="/report" className="navlink">Report Bug</NavLink>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 text-white/70">
          <h2 className="text-xl font-bold text-white/70">Contact</h2>
          <p>Phone: 5255515500</p>
          <p>Email: Atlas@now.com</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
