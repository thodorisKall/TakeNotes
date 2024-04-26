import { React } from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='nav_container'>
      <h1>Take Note</h1>
      <div>
        <button>
          <Link to='notes'>Home</Link>
        </button>
        <button>
          <Link to='/add'>+Create</Link>
        </button>
      </div>
    </nav>
  )
}

export default Nav
