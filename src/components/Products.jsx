import products from '../assets/3.png'

const Products = () => {
  return (
    <section className='flex flex-col items-center mt-[4rem] p-4 text-center gap-4 border-b-2 border-red-700 mx-2'>
          <h2 className='font-semibold text-sm'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h2>
          <img src={products} alt="Products" className='md:w-[60rem]'/>
          <span className='font-semibold text-sm'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
    </section>
  )
}

export default Products
