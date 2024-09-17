import React, { useState } from 'react';
import { css } from '@emotion/css';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [
        {
            id: 1,
            heroContent: (
                <div className='content'>
                    <div className='content-hero'>
                        <h1>Protect Our Forests</h1>
                        <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                        <a className='cta-btn'>Learn More About Forest Conservation</a>
                    </div>
                    <div className='content-stati'>
                        <h2>25M+<span>Trees planted</span></h2>
                        <h2>20+<span>Countries</span></h2>
                        <h2>500k+<span> Acres Protected</span></h2>
                    </div>
                </div>
            ),
            imgClass: 'i01'
        },
        {
            id: 2,
            heroContent: (
                <div className='content'>
                    <div className='content-hero'>
                        <h1>Protect Our Forests 2</h1>
                        <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                        <a className='cta-btn'>Learn More About Forest Conservation</a>
                    </div>
                    <div className='content-stati'>
                        <h2>25M+<span>Trees planted</span></h2>
                        <h2>20+<span>Countries</span></h2>
                        <h2>500k+<span> Acres Protected</span></h2>
                    </div>
                </div>
            ),
            imgClass: 'i02'
        },
        {
            id: 3,
            heroContent: (
                <div className='content'>
                    <div className='content-hero'>
                        <h1>Protect Our Forests 3</h1>
                        <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                        <a className='cta-btn'>Learn More About Forest Conservation</a>
                    </div>
                    <div className='content-stati'>
                        <h2>25M+<span>Trees planted</span></h2>
                        <h2>20+<span>Countries</span></h2>
                        <h2>500k+<span> Acres Protected</span></h2>
                    </div>
                </div>
            ),
            imgClass: 'i03'
        }
    ];
    const filteredSlides = slides.filter(slide => slide.id === currentSlide);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };



    return (
        <div className='hero-carsoul'>
            <div className='imgs-casroul-content'>
                <div className='Slides'>


                <div className="slide">
                                <div className="slide-image i01" ></div>
                                <div className="slide-content 01" >
                                    <div class="slide-image i01 active">
                                        <div class="content">
                                            <div class="content-hero">
                                                <h1>Protect Our Forests</h1>
                                                <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                                                <a href="#" class="cta-btn">Learn More About Forest Conservation</a>
                                            </div>
                                            <div class="content-stati">
                                                <h2>25M+<span>Trees planted</span></h2>
                                                <h2>20+<span>Countries</span></h2>
                                                <h2>500k+<span>Acres Protected</span></h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="slide-image i02">
                                        <div class="content">
                                            <div class="content-hero">
                                                <h1>Protect Our Forests 2</h1>
                                                <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                                                <a href="#" class="cta-btn">Learn More About Forest Conservation</a>
                                            </div>
                                            <div class="content-stati">
                                                <h2>25M+<span>Trees planted</span></h2>
                                                <h2>20+<span>Countries</span></h2>
                                                <h2>500k+<span>Acres Protected</span></h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="slide-image i03">
                                        <div class="content">
                                            <div class="content-hero">
                                                <h1>Protect Our Forests 3</h1>
                                                <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future.</p>
                                                <a href="#" class="cta-btn">Learn More About Forest Conservation</a>
                                            </div>
                                            <div class="content-stati">
                                                <h2>25M+<span>Trees planted</span></h2>
                                                <h2>20+<span>Countries</span></h2>
                                                <h2>500k+<span>Acres Protected</span></h2>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                </div>
            </div>
        </div>


    );
};

export default Carousel;
{/* <div className="slide-image i01" >
                                    <div className='numbers'>
                                        <div className='n01' onClick={() => handleSlideChange(1)}><h3>01</h3></div>
                                        <div className='n02' onClick={() => handleSlideChange(2)}><h3>02</h3></div>
                                        <div className='n03' onClick={() => handleSlideChange(3)}><h3>03</h3></div>
                                    </div>
                                </div> */}