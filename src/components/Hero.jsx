import Navbar from "./Navbar"
// import Below from "./Below"
import Middle from "./Middle"
import BelowMiddle from "./BelowMiddle"


const Hero = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Middle/>

    </div>
    <div className="mt-16">
      <BelowMiddle/>
    </div>
    </>
  )
}

export default Hero