import data from '../API/Aboutus.json';
import {Link} from 'react-router-dom'

const About = () => {

  return (
    <div className="h-full w-full pl-10 pr-10 pt-8 sm:p-10 lg:p-20 ">
      <div className='mb-20'>
        <h1 className='text-[48px] font-bold text-[#90BA52] mb-5'>About Us</h1>
        <p>{data.aboutUs}</p>
      </div>
      <div className='mb-20' >
        <h2 className='text-[36px] font-light text-white/52 mb-5'>What We Offer</h2>
        <p className='mb-4'>{data.whatWeOffer.intro}</p>
        <div className='ml-4 flex flex-col gap-2'>
          <p className='text-[14px]'> {"=>"}  {data.whatWeOffer.features[0]}</p>
          <p className='text-[14px]'> {"=>"}  {data.whatWeOffer.features[1]}</p>
          <p className='text-[14px]'> {"=>"}  {data.whatWeOffer.features[2]}</p>
          <p className='text-[14px]'> {"=>"}  {data.whatWeOffer.features[3]}</p>
          <p className='text-[14px]'> {"=>"}  {data.whatWeOffer.features[4]}</p>
        </div>
      </div>
      <div className='mb-20' >
        <h2 className='text-[36px] font-light text-white/52 mb-2.5'>Why We Created This</h2>
        <p>{data.whyWeCreatedThis}</p>
      </div>
      <div className='mb-20'>
        <h2 className='text-[36px] font-light text-white/52 mb-2.5'>Our Vision</h2>
        <p>{data.ourVision}</p>
      </div>

      <Link to='/countries' className='h-12.75 w-47.25 bg-[#171717] rounded-full flex gap-2 items-center justify-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:bg-[#1f1f1f] ml-1 '>
        Start Explore
        <i className="ri-arrow-right-line"></i> 
      </Link>
    </div>
  )
}

export default About
