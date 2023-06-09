import React from 'react';
import Footer from '../footer.js';

import { Link } from 'react-router-dom';
import logoImage from '../../../static/assets/images/logo.png';

export default function Contact() {
     return (
      <div className='contact-wrapper'>
              <div className='contact-header'>
        <Link to="/">
          <img className='img' src={logoImage} alt='logo'
            style={{ height: '110px', width: '280px'}}>
          </img>
        </Link>

        <h1>Contact Us</h1>
      </div>
      <Footer />
      </div>
      );
   }