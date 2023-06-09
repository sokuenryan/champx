import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Thrift() {
     return (
      <div className='thrift-wrapper'>
        <div className='thrift-header'>
          <Link to="/">
            <img className='img' src={logoImage} alt='logo'
              style={{ height: '110px', width: '280px'}}>
            </img>
            </Link>

          <h1>Thrift Store</h1>
        </div>
        <Footer />
      </div>

      );
   }