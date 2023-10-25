import React from 'react'
import "./Hero.css"
import hand_icon from "../Assests/hand_icon.png"
import arrow_icon from "../Assests/arrow.png"
import hero_image from "../Assests/hero_image.png"
const Hero = () => {
    return (
        <div className='hero'>

            {/* left side */}
            <div className='hero-left'>
                <h2>New Arivals Only</h2>
                <div>
                    <div className='hand-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} />
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} />
                </div>
            </div>

            {/* right side */}
            <div className='hero-right'>
                <img src={hero_image} />
            </div>

        </div>
    )
}

export default Hero