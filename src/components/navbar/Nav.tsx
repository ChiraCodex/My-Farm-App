import { Link } from "react-router-dom"


function Nav() {
  return (
    <div>
      <ul className='flex items-center ml-8 gap-8 font-semibold'>
        <li className="hover:bg-springBeige hover:text-jungleGreen rounded-xl px-1 cursor-pointer active:bg-springBeige active:text-jungleGreen">
          <Link to={'/about-us'}>Who we Are</Link>
        </li>
        <li className="hover:bg-springBeige hover:text-jungleGreen rounded-xl px-1 cursor-pointer">What we Do</li>
        <li className="hover:bg-springBeige hover:text-jungleGreen rounded-xl px-1 cursor-pointer">Get Started</li>
      </ul>
    </div>
  )
}

export default Nav
