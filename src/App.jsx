import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Sectors from "./components/Sectors"

function App() {

  return (
    <main className="min-h-[100vh] bg-gradient-to-b from-[#faede3] to-[#fad5bb] p-2 font-sans">
      <Header />
      <Hero />
      <Products />
      <Sectors />
      <Footer />
    </main>
  )
}

export default App
