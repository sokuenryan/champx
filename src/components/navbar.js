import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
     return (
        <nav className='navbar'>
          <ul>
            <li>
                <Link to="/trading"><button className='btn'>Trading</button></Link>
            </li>

            <li>
                <Link to="/selling"><button className='btn'>Selling</button></Link>
            </li>
            <li>
                <Link to="/thrift"><button className='btn'>Thift Store</button></Link>
            </li>

            <li>
                <Link to="/about"><button className='btn'>About Us</button></Link>
            </li>

            <li>
                <Link to="/contact"><button className='btn'>Contact Us</button></Link>
            </li>
          </ul>
      </nav>
      );
     };

   export default Navbar;