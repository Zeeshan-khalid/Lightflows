// LikeAnimation.js
import React, { useState, useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './LikeButton.css';

const LikeAnimation = ({ onAnimationComplete }) => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const animationDuration = 1000; // Adjust the duration as needed
        setTimeout(() => {
            setIsAnimating(false);
            onAnimationComplete(); // Notify the parent component that the animation is complete
        }, animationDuration);
    }, [onAnimationComplete]);

    return (
        <div className={`like-animation${isAnimating ? ' animating' : ''}`}>
            <AiFillHeart className="heart-animate" size={15} fill="#AB8E66" />
        </div>
    );
};

export default LikeAnimation;
