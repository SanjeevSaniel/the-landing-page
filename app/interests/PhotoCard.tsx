import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Button,
  Pagination,
  Tooltip,
} from '@nextui-org/react';


const PhotoCard = ({ currentPage }: {currentPage: number}) => {
  const photos = [
    {
      id: 1,
      sourceUrl:
        'https://images.pexels.com/photos/17965125/pexels-photo-17965125/free-photo-of-atal-foot-over-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Atal Pedestrian Bridge',
      location: 'Ahmedabad, Gujarat, India',
      description: 'Pedestrian triangular truss bridge.',
    },
    {
      id: 2,
      sourceUrl:
        'https://images.pexels.com/photos/16090635/pexels-photo-16090635/free-photo-of-james-princep-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'James Princep Memorial',
      location: 'Kolkata, West Bengal, India',
      description:
        'The monument is one of the finest examples of colonial architecture in Kolkata.',
    },
    {
      id: 3,
      sourceUrl:
        'https://images.pexels.com/photos/17465412/pexels-photo-17465412/free-photo-of-konark-sun-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Konark Sun Temple',
      location: 'Konark, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 4,
      sourceUrl:
        'https://images.pexels.com/photos/17724358/pexels-photo-17724358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Teesta Valley Forest',
      location: 'Teesta Valley Forest, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 5,
      sourceUrl:
        'https://images.pexels.com/photos/16287591/pexels-photo-16287591/free-photo-of-st-paul-s-cathedral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: `St. Paul's Cathedral Church`,
      location: 'Kolkata, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 6,
      sourceUrl:
        'https://images.pexels.com/photos/19665118/pexels-photo-19665118/free-photo-of-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Kala Bhoomi - Odisha Crafts Museum',
      location: 'Bhubaneswar, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
  ];

  return (
    <div>
      
    </div>
  );
};

export default PhotoCard;
