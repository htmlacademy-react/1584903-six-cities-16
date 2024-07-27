import {OfferCardType, OfferType} from '../types/offer.ts';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const newOffers: OfferType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 6
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/room.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'wifi'
    ],
    host: {
      name: 'Ivan Ivanov',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '7af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'TV'
    ],
    host: {
      name: 'John Doe',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '8af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.3,
    previewImage: 'img/apartment-02.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'wifi',
      'TV'
    ],
    host: {
      name: 'Jack Brown',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '9af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'White castle',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    previewImage: 'img/apartment-03.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'Cleaning'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  }
];

export const offers: OfferCardType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/room.jpg'
  },
  {
    id: '7af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '8af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.3,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '9af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'White castle',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 8
      }},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    previewImage: 'img/apartment-03.jpg'
  }
];
