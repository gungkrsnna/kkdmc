import {
  FaPlaneDeparture,
  FaHotel,
  FaUmbrellaBeach,
  FaSpa,
  FaWater,
} from 'react-icons/fa'

import {
  MdDirectionsCar,
} from 'react-icons/md'

import {
  GiIsland,
  GiPathDistance,
} from 'react-icons/gi'

const categories = [
  {
    id: 1,
    title: 'Airport Transfer',
    slug: 'airport-transfer',
    page: '/transport',
    icon: FaPlaneDeparture,
  },

  {
    id: 2,
    title: 'Hotel',
    slug: 'hotel',
    page: '/hotels',
    icon: FaHotel,
  },

  {
    id: 3,
    title: 'Beach Tour',
    slug: 'beach-tour',
    page: '/activities',
    icon: FaUmbrellaBeach,
  },

  {
    id: 4,
    title: 'Private Driver',
    slug: 'private-driver',
    page: '/transport',
    icon: MdDirectionsCar,
  },

  {
    id: 5,
    title: 'Adventure',
    slug: 'adventure',
    page: '/activities',
    icon: GiPathDistance,
  },

  {
    id: 6,
    title: 'Spa & Wellness',
    slug: 'spa',
    page: '/activities',
    icon: FaSpa,
  },

  {
    id: 7,
    title: 'Water Sport',
    slug: 'water-sport',
    page: '/activities',
    icon: FaWater,
  },

  {
    id: 8,
    title: 'Island Tour',
    slug: 'island-tour',
    page: '/activities',
    icon: GiIsland,
  },
]

export default categories