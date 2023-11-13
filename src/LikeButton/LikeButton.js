// LikeButton.js
import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import LikeAnimation from './LikeAnimation';
import './LikeButton.css';

const LikeButton = ({ carId }) => {
  // State to manage liked status and animation display
  const [isLiked, setIsLiked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Fetch liked status from localStorage on component mount
    const storedLikedStatus = localStorage.getItem('likedStatus');
    if (storedLikedStatus) {
      const likedStatus = JSON.parse(storedLikedStatus);
      setIsLiked(likedStatus[carId] || false);
    }
  }, [carId]);

  // Handle click on the like button
  const handleLikeClick = () => {
    // Toggle liked status
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    // Update liked status in localStorage
    const storedLikedStatus = JSON.parse(localStorage.getItem('likedStatus')) || {};
    localStorage.setItem('likedStatus', JSON.stringify({ ...storedLikedStatus, [carId]: newLikedStatus }));

    // Trigger animation display
    setShowAnimation(true);
  };

  // Handle animation completion
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <div className="like-icon" onClick={handleLikeClick}>
      {isLiked ? (
        // Display outline heart when not liked
        <AiOutlineHeart className='heart' size={15} />
      ) : (
        // Display filled heart when liked and show animation if needed
        <React.Fragment>
          <AiFillHeart className='heart' size={15} fill='#AB8E66' />
          {showAnimation && <LikeAnimation onAnimationComplete={handleAnimationComplete} />}
        </React.Fragment>
      )}
    </div>
  );
};

export default LikeButton;
