import {OfferType} from '../types/offer.ts';

export const offers: OfferType[] = [
  {
    id: '1',
    src: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: false,
    amount: 80,
    title: 'Wood and stone place',
    type: 'room',
    isFavourite: true,
    description: 'Wood and stone placeWood and stone placeWood and stone place',
    rating: 4,
    amountBedrooms: '3 Bedrooms',
    maxGuests: 'Max 6 adults',
    ownerInfo: 'Ivanov Ivan Ivanovich',
    city: 'Amsterdam'
  },
  {
    id: '2',
    src: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: false,
    amount: 132,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    isFavourite: false,
    description: 'Canal View PrinsengrachtCanal View PrinsengrachtCanal View Prinsengracht',
    rating: 5,
    amountBedrooms: '2 Bedrooms',
    maxGuests: 'Max 4 adults',
    ownerInfo: 'Petrov Petr Petrovich',
    city: ''
  },
  {
    id: '3',
    src: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    amount: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    isFavourite: true,
    description: 'Nice, cozy, warm big bed apartmentNice, cozy, warm big bed apartmentNice, cozy, warm big bed apartment',
    rating: 4.5,
    amountBedrooms: '1 Bedroom',
    maxGuests: 'Max 2 adults',
    ownerInfo: 'Nikolaeva Inna Petrovna',
    city: 'Amsterdam'
  },
  {
    id: '4',
    src: [
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg'
    ],
    isPremium: false,
    amount: 180,
    title: 'White castle',
    type: 'apartment',
    isFavourite: true,
    description: 'White castleWhite castleWhite castleWhite castle',
    rating: 4.7,
    amountBedrooms: '1 Bedroom',
    maxGuests: 'Max 2 dults',
    ownerInfo: 'Kruglov Mihail Aleksandrovich',
    city: 'Cologne'
  },
];

// export const favoritesOffers: OfferType[] = [
//   {
//     id: '1',
//     src: 'img/apartment-small-03.jpg',
//     isPremium: true,
//     amount: 180,
//     title: 'Nice, cozy, warm big bed apartment',
//     type: 'apartment'
//   },
//   {
//     id: '2',
//     src: 'img/room-small.jpg',
//     isPremium: false,
//     amount: 80,
//     title: 'Wood and stone place',
//     type: 'room'
//   },
//   {
//     id: '3',
//     src: 'img/apartment-small-04.jpg',
//     isPremium: false,
//     amount: 180,
//     title: 'White castle',
//     type: 'apartment'
//   },
// ];
