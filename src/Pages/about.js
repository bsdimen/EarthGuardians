import { Link } from 'react-router-dom';
import NavBar from '../Components/ui/navBar';
import visionImg from "../IMGS/our-vision.svg";
import arrowIcon from "../IMGS/Icons/Icon-arrow-right.svg";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="About">
            <div className="hero-aria-about">
                <NavBar />
                <motion.div className='hero-aria-about-content'>
                    <h2>About</h2>
                    <h1>EarthGuardians</h1>
                </motion.div>

            </div>
            <div className="about-content">
                <section className="mission-section">
                    <motion.div className='mission-section-content'
                    initial = {{y: "400px", opacity: 0 }}
                    animate= {{y: "0", opacity: 1 }}
                    transition={{duration: 4}}
                    >
                        <div className='mission-section-heading'>
                            <h2>Our<br /> Mission</h2>
                        </div>
                        <div className='mission-section-paragraph'>
                            <p>
                                At <span>EarthGuardians</span>, we are committed to preserving and protecting the environment for future generations. Our mission is to promote sustainable practices, conserve natural resources, and raise awareness about the importance of environmental stewardship. We believe that every individual has a role to play in safeguarding our planet, and we strive to empower communities to take action.
                            </p>
                        </div>

                    </motion.div>
                </section>

                {/* <section className="who-we-are-section">
                    <div className='who-we-are-section-content'>
                        <h2>Who We Are</h2>
                        <p>
                            <span>[Association Name]</span> is a non-profit organization founded by a group of passionate individuals who share a deep concern for the environment. Our team is composed of environmentalists, scientists, educators, and volunteers dedicated to making a positive impact. Since our establishment in <span className="establishment-year">[Year]</span>, we have been working tirelessly to address environmental challenges at both local and global levels.
                        </p>
                    </div>
                    <div className='who-we-are-section-img'>
                        <img src={whoImg} />
                    </div>
                </section> */}

                <section className="what-we-do-section">
                    <div className='what-we-do-section-content'>
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
                </section>

                <section className="vision-section">
                    <div className="vision-section-wrapper">
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


                </section>

                <section className="join-us-section">
                    <div className='join-us-section-wrapper'>
                        <h2>Join Us</h2>
                        <p>
                            Whether you’re an individual looking to make a difference, a business seeking to adopt sustainable practices, or a community group ready to collaborate, <span>EarthGuardians</span> welcomes you to join our efforts. Together, we can create a healthier, more sustainable planet for all.
                        </p>
                        <Link to="" className='btn-primary'>Join us</Link>
                    </div>

                </section>

                <section className="get-involved-section">
                    <div className='get-involved-section-wrapper'>
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

                </section>
            </div>
        </div>

    )
}