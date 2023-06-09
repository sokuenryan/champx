import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Selling() {
     return (
      <div className='selling-wrapper'>
        <div className='selling-header'>
          <Link to="/">
            <img className='img' src={logoImage} alt='logo'
              style={{ height: '110px', width: '280px'}}>
            </img>
          </Link>

          <h1>Selling Page</h1>
        </div>
        <Footer />
      </div>
      );
   }