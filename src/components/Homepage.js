import React from 'react'
import { Link} from 'react-router-dom'


const Homepage = () => {
  return (
    <div>
        <h1>Item list</h1>
        <ul>
        <Link to="/items/1"><li>Item 1</li></Link>
        <Link to="/items/2"><li>Item 2</li></Link>
        <Link to="/items/3"><li>Item 3</li></Link>
        </ul>
    </div>
  )
}

export default Homepage