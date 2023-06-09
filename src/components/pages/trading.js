import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Trading() {
     return (
      <div className='trading-wrapper'>
        <div className='trading-header'>
          <Link to="/">
            <img className='img' src={logoImage} alt='logo'
              style={{ height: '110px', width: '280px'}}>
            </img>
          </Link>

          <h1>Trading Zone</h1>
        </div>
        <Footer />
      </div>
      );
   }