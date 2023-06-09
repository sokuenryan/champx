import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Cart() {
     return (
      <div className='cart-wrapper'>
        <div className='cart-header'>
          <Link to="/">
            <img className='img' src={logoImage} alt='logo'
              style={{ height: '110px', width: '280px'}}>
            </img>
          </Link>

          <h1>Your Cart</h1>
        </div>
        <Footer />
      </div>
      );
   }