import award from '../assets/1.png'
import awardCeremony from '../assets/2.png'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center mt-4'>
          <section className='w-full md:w-4/12 flex items-center justify-center'>
              <img src={award} alt="Award Image" className='h-80 md:h-[40rem]'/>
          </section>

          <section className='w-full p-2 md:p-0 md:w-8/12'>
              <h2 className='font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
              <ul className='text-sm p-4 font-semibold'>
                  <li className='list-disc'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li className='list-disc'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
              </ul>
              <img src={awardCeremony} alt="Receiving Award" className='w-11/12'/>
              <p className='font-medium text-md'>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </section>
    </section>
  )
}

export default Hero
