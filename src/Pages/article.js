import React, { useState } from 'react';
import imgHero from "../Assets/Imgs/pexels-jplenio-2566845.jpg";
import Header from '../Components/header';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BoredDisppointedEmoji, CheckIcon, HappyBigSmiledEmoji, HappySmiledEmoji, SadEmbrassedEmoji, SadPainEmoji, Timer } from "../Components/icons";

import { motion, useInView } from 'framer-motion';
import Footer from '../Components/footer';
const Article = () => {

    return (
        <div className='Article'>
            <div className='center-h'>
                <Header />
            </div>
            <div className='article-container center-h'>
                <div className='container'>
                    <div className='article-hero'>
                        <div className='article-hero-img'>
                            <img src={imgHero} />
                        </div>
                        <div className='article-hero-title'>
                            <h1>Hello to article title</h1>
                            <div className='article-hero-details'>
                                <p>Posted September 13th, 2023</p>
                            </div>
                        </div>
                        <div className='article-hero-time-to-read'>
                            <Timer />
                            <h5>5 min to read</h5>
                        </div>
                    </div>
                    <ArticleModele />
                    <RatingArticle />
                </div>
            </div>

            <Footer />
        </div>


    );
}

const ArticleModele = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return <div className='article-content'>
        <article>
            <section ref={section1Ref} >
                <h2>Introduction</h2>
                <p>
                    Pollution is one of the most significant global challenges of the 21st century. It refers to the introduction of harmful materials into the environment, causing adverse effects to the natural world and human health. These pollutants can come in many forms, such as chemicals, particles, noise, and heat. Pollution threatens the health of ecosystems and humans, making it a crucial issue that needs to be addressed worldwide.
                </p>
                <p>
                    With industrialization, urbanization, and modern-day lifestyles, pollution has reached unprecedented levels. Despite efforts to curb pollution through laws and awareness campaigns, its detrimental effects continue to grow, exacerbating climate change, causing health crises, and threatening biodiversity.
                </p>
            </section>

            <section ref={section2Ref} >
                <h2>Types of Pollution</h2>
                <p>
                    Pollution comes in various forms, and each type impacts the environment and human health differently. The major types of pollution are:
                </p>
                <h3>1. Air Pollution</h3>
                <p>
                    Air pollution occurs when harmful substances are released into the atmosphere, including chemicals, particulate matter, and biological materials. Common sources include vehicle emissions, industrial discharges, and burning fossil fuels. Air pollution leads to respiratory problems, heart disease, and contributes to global warming by releasing greenhouse gases like carbon dioxide (CO2) and methane.
                </p>
                <h3>2. Water Pollution</h3>
                <p>
                    Water pollution occurs when contaminants such as chemicals, plastics, and waste products enter water bodies like rivers, lakes, and oceans. This leads to the degradation of aquatic ecosystems and poses a danger to human health by contaminating drinking water. Common pollutants include industrial waste, agricultural runoff, and plastic debris.
                </p>
                <h3>3. Soil Pollution</h3>
                <p>
                    Soil pollution is caused by the introduction of hazardous substances into the soil. Common pollutants include pesticides, industrial chemicals, and heavy metals. These substances can decrease soil fertility, harm plant life, and contaminate the food chain, affecting animals and humans who rely on crops grown in polluted soil.
                </p>
                <h3>4. Noise Pollution</h3>
                <p>
                    Noise pollution refers to excessive and harmful sounds in the environment, primarily from transportation, construction, and industrial activities. Prolonged exposure to high levels of noise can cause hearing loss, stress, and sleep disturbances, as well as affect wildlife by disrupting communication and mating behaviors.
                </p>
                <h3>5. Plastic Pollution</h3>
                <p>
                    Plastic pollution is an increasing concern, especially in marine environments. Plastics, which take hundreds of years to decompose, are choking oceans and harming marine life. Microplastics, tiny plastic particles, have been found in food and water sources, potentially posing health risks to humans.
                </p>
            </section>

            <section ref={section3Ref} >
                <h2>Conclusion</h2>
                <p>
                    Addressing pollution requires a collective effort from governments, industries, and individuals. Reducing emissions, adopting sustainable practices, improving waste management, and increasing public awareness are essential steps in mitigating the effects of pollution. The future of our planet depends on the actions we take today to preserve the environment and promote cleaner, healthier living conditions for all.
                </p>
                <p>
                    Combating pollution is not just about reducing its current effects, but also about preventing future damage. With the right policies and individual actions, a more sustainable and pollution-free world is possible.
                </p>
            </section>
            <p className='written-by'>Written By <Link >Michel Smith</Link></p>

        </article>
        <div className='article-nav'>
            <button className='btn-inline' onClick={() => { scrollToSection(section1Ref) }}><ArrowRightIcon /><span>Introduction</span></button>
            <button className='btn-inline' onClick={() => { scrollToSection(section2Ref) }}><ArrowRightIcon /><span>Types of Pollution</span></button>
            <button className='btn-inline' onClick={() => { scrollToSection(section3Ref) }}><ArrowRightIcon /><span>Conclusion</span></button>
        </div>
    </div>
}

const RatingArticle = () => {

    const [rating, setRating] = useState();
    const [isRating, setIsRating] = useState();

    const ref = useRef()
    const isInView = useInView(ref)

    const handleSubmit = (emoji) => {
        setIsRating(true)

    };

    return <motion.div ref={ref}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
        transition={{ duration: 0.5 }}
        className='did-enjoy-article-section center-h center-v'>
        {!isRating && <h4>How did you find this article? </h4>}
        {!isRating && <form>
            <span onClick={() => handleSubmit('0')}>
                <SadPainEmoji />
            </span>
            <span onClick={() => handleSubmit('1')}>
                <SadEmbrassedEmoji />
            </span>
            <span onClick={() => handleSubmit('2')}>
                <BoredDisppointedEmoji />
            </span>
            <span onClick={() => handleSubmit('3')}>
                <HappyBigSmiledEmoji />
            </span>
            <span onClick={() => handleSubmit('4')}>
                <HappySmiledEmoji />
            </span>
        </form>}
        {isRating && <motion.div className='submit-rating center-h center-v'>
            <motion.span><CheckIcon /></motion.span>
            <motion.p>Thanks for your rating</motion.p>
        </motion.div>}
    </motion.div>
}

export default Article;
