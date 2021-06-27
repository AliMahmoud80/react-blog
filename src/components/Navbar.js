import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <div className="navbar container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </div>
   );
}
 
export default Navbar;