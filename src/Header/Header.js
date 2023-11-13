// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Retrieve the like status from localStorage on component mount
        const storedLikeStatus = localStorage.getItem('isLiked');
        if (storedLikeStatus) {
            setIsLiked(JSON.parse(storedLikeStatus));
        }
    }, []);

    const handleLikeClick = () => {
        // Toggle the like status and store it in localStorage
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        localStorage.setItem('isLiked', JSON.stringify(newLikeStatus));
    };

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <div className='header'>
            <>
                <div className='flex justify item-center'>
                    <img src="./Porsche_logo.png" width="250" height="13.33" alt="Zeeshan Logo" />
                    <div className='flex item-center desktop'>
                        <a href='#'>About Us</a>
                        <a href='#' onClick={handleLikeClick}>
                            {isLiked ? <AiFillHeart className='heart' size={15} fill='#AB8E66' /> : <AiOutlineHeart className='heart' size={15} />}
                        </a>
                        <a href='#' className='contact'>Contact Sales</a>
                    </div>
                    <div className='flex item-center mobile'>
                        <a onClick={handleLikeClick}>
                            {isLiked ? <AiFillHeart className='heart' size={25} fill='#AB8E66' /> : <AiOutlineHeart className='heart' size={15} />}
                        </a>
                        <RxHamburgerMenu className='ml-15 hamburger-icon mobile' color='#AB8E66' size={30} onClick={handleShowNavbar} />
                    </div>

                </div>
                <div className='mobile'>
                    <div className={`nav-items ${showNavbar ? 'active' : 'inactive'}`}>
                        <a>About Us</a>
                        <a className='contact'>Contact Sales</a>
                    </div>
                </div>
            </>

        </div>
    );
};

export default Header;
