

const Sectors = () => {
    const sectors = ['CHEMICALS & PROCESS', 'POWER', 'WATER & WASTE WATER',' OILS & GAS', 'PHARMA', 'SUGARS & DISTILLERIES', 'PAPER & PULP', 'MARINE & DEFENCE', 'METAL & MINING', 'FOOD & BEVERAGE', 'PETROCHEMICAL & REFINERIES', 'SOLAR', 'BUILDING', 'HVAC', 'FIRE FIGHTING', 'AGRICULTURE & RESIDENTIAL']
  return (
    <section className="flex flex-col items-center mt-4">
          <h2 className="font-bold text-center">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
          <p className="font-semibold text-center text-sm p-4">{sectors.map((sector, index) => (
              <span key={index}>{sector} <span className="text-red-600">|</span> </span>
          ))}</p>
    </section>
  )
}

export default Sectors
