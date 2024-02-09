import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>LA AMENEZA VERDADERA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='El viltrumita mas experimentado'
              label='Conquest'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='La mujer viltrumita mas fuerte'
              label='Anissa'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='La bestia mas salvaje del universo'
              label='Battle Beast'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='La raza mas poderosa del universo'
              label='Ejercito viltrum'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='El emperador viltrum'
              label='Thrag'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
