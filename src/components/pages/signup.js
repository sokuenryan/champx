import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Signup() {
     return (
      <div className='cart-wrapper'>
        <div className='cart-header'>
          <Link to="/">
            <img className='img' src={logoImage} alt='logo'
              style={{ height: '110px', width: '280px'}}>
            </img>
          </Link>

          <h1>New Member</h1>
        </div>
        <Footer />
      </div>
      );
   }