import { Link } from 'react-router-dom';
import Header from '../../Components/header';
import { VideoHero } from "../../Components/prefabs";

import visionImg from "../../Assets/Imgs/SVG/our-vision.svg";
import arrowIcon from "../../Assets/Icons/Icon-arrow-right.svg";
import { motion } from 'framer-motion';
import heroVideo from "../../Assets/Videos/03.mp4";

import { useRef, useEffect } from 'react';
export default function About() {
    return (
        <div className="About">
            <div className='hero-aria-about center-h'>
                <Header color="white" />
                <HeroSection />
            </div>

            <div className="about-content">
                <section className="mission-section center-h">
                    <div className='container'>
                        <motion.div className='mission-section-content'
                            initial={{ y: "400px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{ duration: 4 }}
                        >
                            <div className='mission-section-heading'>
                                <h2>Our<br /> Mission</h2>
                            </div>
                            <div className='mission-section-paragraph'>
                                <p>
                                    At <span>EarthGuardians</span>, we are committed to preserving and protecting the environment for future generations. Our mission is to promote sustainable practices, conserve natural resources, and raise awareness about the importance of environmental stewardship. We believe that every individual has a role to play in safeguarding our planet, and we strive to empower communities to take action.
                                </p>
                            </div>

                        </motion.div></div>

                </section>

                <section className="what-we-do-section">
                    <div className='what-we-do-section-content center-h'>
                        <div className='container'>
                            <div className='what-we-do-section-heading'>
                                <h2>What We Do</h2>
                            </div>
                            <ul>
                                <li>
                                    <strong>Conservation Projects</strong><br /> We work on preserving endangered species, protecting natural habitats, and restoring ecosystems.
                                </li>
                                <li>
                                    <strong>Education and Advocacy</strong><br /> We conduct workshops, seminars, and campaigns to educate the public about environmental issues and advocate for policies that promote sustainability.
                                </li>
                                <li>
                                    <strong>Community Engagement</strong><br /> We collaborate with local communities to implement eco-friendly practices and encourage sustainable living.
                                </li>
                                <li>
                                    <strong>Research and Innovation</strong><br /> We support research that contributes to a better understanding of environmental challenges and promotes innovative solutions.
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="vision-section">
                    <div className="vision-section-wrapper center-h">
                        <div className='container'>
                            <div className='vision-section-content'>
                                <h2>Our Vision</h2>
                                <p>
                                    Our vision is a world where the environment is respected and protected, and where sustainable living is a way of life. We aspire to create a future where biodiversity thrives, natural resources are conserved, and the impact of climate change is minimized.
                                </p>
                            </div>
                            <div className='vision-section-img'>
                                <img src={visionImg} />
                            </div>
                        </div>

                    </div>


                </section>

                <section className="join-us-section">
                    <div className='join-us-section-wrapper center-h'>
                        <div className='container'>
                            <h2>Join Us</h2>
                            <p>
                                Whether you’re an individual looking to make a difference, a business seeking to adopt sustainable practices, or a community group ready to collaborate, <span>EarthGuardians</span> welcomes you to join our efforts. Together, we can create a healthier, more sustainable planet for all.
                            </p>
                            <Link to="" className='btn-primary' data-content="Join us">Join us</Link>
                        </div>

                    </div>

                </section>

                <section className="get-involved-section">
                    <div className='get-involved-section-wrapper center-h'>
                        <div className='container'>
                            <div className='get-involved-content'>
                                <h2>Get Involved</h2>
                                <p>
                                    There are many ways to get involved with <span>EarthGuardians</span>. You can volunteer your time, donate to support our projects, or participate in our events. Visit our <a href="/get-involved" className="get-involved-link">Get Involved</a> page to learn more about how you can contribute to our mission.
                                </p>
                            </div>
                            <div className='get-involved-links'>
                                <Link to="" className='get-involve-link'><img src={arrowIcon} />Join us as volunteer</Link>
                                <Link to="" className='get-involve-link'><img src={arrowIcon} />Donate to us</Link>
                                <Link to="" className='get-involve-link'><img src={arrowIcon} />Check our events to participate</Link>


                            </div>
                        </div>


                    </div>

                </section>
            </div>
        </div>

    )
}

const HeroSection = () => {
    return (
        <div className="container center-v">
            <motion.div className='hero-aria-content'>
                <h1 className='h1-hero-aria'>Get To Know Earth Guardians</h1>
                <p className='pragraph-hero-aria'>We're here to help and answer any questions you may have about our mission and initiatives. Whether you're interested in collaborating, volunteering, or just learning more about how you can make a difference, feel free to reach out to us. Your support and feedback are invaluable to us as we work together to protect and preserve our planet for future generations. Contact us using the form below or through the provided details, and we'll get back to you as soon as possible.</p>
            </motion.div>
            <VideoHero src={heroVideo} />

        </div>
    )
}