import { React } from "react"
import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5"

const Nav = () => {
  return (
    <nav className='nav_container'>
      <h1>Take Note</h1>
      <div className='nav_buttons'>
        <button id='home_btn'>
          <Link to='notes'>
            <IoHomeOutline />
            Home
          </Link>
        </button>
        <button id='create_btn'>
          <Link to='/add'>+Create</Link>
        </button>
      </div>
    </nav>
  )
}

export default Nav
