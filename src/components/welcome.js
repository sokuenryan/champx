import React from 'react';

export default function Welcome() {
    return (
      <div className='welcome-text-wrapper'>
          <div className='welcome-text-top'>
            <h1>Welcome To Champions Exchange!</h1> 

            <p>Here you can find all your favorite team jerseys, posters, trading cards,
              and collectables for cheap or trade. This is a communal platforms for all 
              those who love champions or perhaps looking to become one! Sign in to start trading or
              thrift your way through equipment usually found at your favorite retailers. 
              Miss the sale at your local sports store? Find it here at Sport Exchange!
            </p>
          </div>

          <div className='welcome-text-bottom'>
            <h1>New to the Community?</h1>

            <p>Check out our links at the bottom where you can join our online groups
              where we talk about celebrity meet and greets, potential partners and
              company network suggestions to help find equipment. Or donate to one of our charities 
              where we have opened up an platform so you can send a word of encouragment to them to
              become a champion as well!
            </p>
          </div>
       </div>
      );
   }