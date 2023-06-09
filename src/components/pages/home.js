import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaPhone, FaUserAlt, FaShoppingBasket} from 'react-icons/fa';

import SearchBarWithDropdown from '../searchbar.js';
import Navbar from '../navbar.js';
import Carousel, { CarouselItem } from '../carousel.js';
import Footer from '../footer.js';
import logoImage from '../../../static/assets/images/logo.png';

export default class Home extends Component {
   render() {
     return (
      <div className='homepage'>
        <div className='homepage-header-wrapper'>
          <div className='home-header-one'>
              <img className='img' src={logoImage} alt='logo' 
                style={{ height: '110px', width: '280px'}}>
              </img>
              <SearchBarWithDropdown />
              <FaPhone
                style={{
                transform: 'scaleX(-1)',
                height: '22px',
                width: '22px',
                marginLeft: '15px',
                marginRight: '5px'
              }}
              />

              <div className='contact'>
                  Customer Service Line
                  <br />
                  555 555-555
              </div>
              
              <div className='header-icons'>
                <li>
                  <div className='sign-in'>
                    <Link to="/signup">
                      <FaUserAlt 
                        style={{
                        height: '22px',
                        width: '22px',
                        marginLeft: '20px'}}
                      />
                    </Link>
                  </div>
                </li>
    
                <li>
                  <div className='cart'>
                    <Link to="/cart">
                      <FaShoppingBasket
                        style={{
                        height: '27px',
                        width: '27px',
                        marginLeft: '15px'}}
                      />
                    </Link>
                  </div>
                </li>
              </div>
          </div>

          <div className='home-header-two'>
                <Navbar />
          </div>
        </div>

        <div className='home-body'>
              <Carousel>
                <CarouselItem>
                  <img src='../assets/images/baseball.jpg' />
                  <h1>Baseball</h1>
                </CarouselItem>

                <CarouselItem>
                  <img src='../assets/images/basketball.jpg' />
                  <h1>Basketball</h1>
                </CarouselItem>

                <CarouselItem>
                  <img src='../assets/images/football.jpg' />
                  <h1>Football</h1>
                </CarouselItem>

                <CarouselItem>
                  <img src='../assets/images/soccer.jpg' />
                  <h1>Soccer</h1>
                </CarouselItem>

                <CarouselItem>
                  <img src='../assets/images/hockey.jpg' />
                  <h1>Hockey</h1>
                </CarouselItem>
              </Carousel>
        </div>

        <Footer />   
      </div>
      );
     }
}
