// Cards.js
import React, { useState, useEffect } from 'react';
import './Card.css'; // Import the CSS file
import axios from 'axios';
import { TbManualGearbox } from 'react-icons/tb';
import { PiEngineLight } from 'react-icons/pi';
import LikeButton from '../LikeButton/LikeButton';

const Cards = () => {
  // State to store car data
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from the API on component mount
    axios.get('https://products.lfdev.co/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='cards'>
      <div className="card-container">
        {cars?.data?.map(car => (
          <div key={car.id} className="card">
            {/* Header of the card with car attributes and Like button */}
            <div className='flex absolute space-between w-100 p-20'>
              <div className="card-label">
                <span>{car.attributes}</span>
              </div>
              <LikeButton carId={car.id} />
            </div>

            {/* Car image */}
            <img
              src={`https://products.lfdev.co${car.image_path}`}
              alt={`Car ${car.model || 'Model not found'}`}
            />

            {/* Car content */}
            <div className="card-content">
              <div className="name">{car.name || 'Model Not found'}</div>
              <div className="location">{car.location || 'Location not found'}</div>

              {/* Car engine and gearbox information */}
              <div className='item'>
                <div className="engine">
                  <PiEngineLight size={20} className='relative top-2' /> {car.engine || '0'}
                </div>
                <div className="gearbox ml-15">
                  <TbManualGearbox className='relative top-2' /> {car.gearbox || '0'}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* View all cars link */}
        <div className='card text-center contact-sales'>
          <a>View all cars</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
