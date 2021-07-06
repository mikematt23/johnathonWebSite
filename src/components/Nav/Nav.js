import { Link } from 'react-router-dom'

const Nav = ()=>{
  return(
    <div>
       <button><Link to = '/'>Home</Link></button>
       <button><Link to = '/about'>About</Link></button>      
    </div>
  )
}

export default Nav