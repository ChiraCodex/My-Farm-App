import Logo from "./navbar/Logo"
import Nav from "./navbar/Nav"
import Searchbar from "./navbar/Searchbar"

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-4 my-4">
      <Logo/>
      <Nav/>
      <Searchbar/>
    </div>
  )
}

export default Navbar
