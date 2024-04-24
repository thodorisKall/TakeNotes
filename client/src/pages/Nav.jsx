import { React } from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <button>
        <Link>About</Link>
      </button>
      <button>
        <Link to='/add'>+Create</Link>
      </button>
      <button>
        <Link to='notes'>Home</Link>
      </button>
    </div>
  )
}

export default Nav
