import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='flex justify-center items-center'>
      <img src={logo} alt="Logo" className='h-20 sm:h-28'/>
    </header>
  )
}

export default Header
