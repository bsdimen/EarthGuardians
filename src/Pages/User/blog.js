import { useRef, useState, useEffect } from "react";

import Header from "../../Components/header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BtnShadow, VideoHero } from "../../Components/prefabs";

import heroVideo from "../../Assets/Videos/01.mp4"


export default function Blog() {

    return (
        <div className="Blog">
            <div className="hero-section center-h">
                <Header color="white" />
                <HeroSection />

            </div>
            <div className="blog-container">
                <div className="blog-content">
                    <div className="category-section  center-h">
                        <div className="container">
                            <Categories />
                        </div>
                    </div>
                    <div className="blogs">
                        <div className="container">

                        </div>

                    </div>

                </div>
            </div>
        </div >

    )
}
const HeroSection = () => {

    return (<div className="blog-heading center-h center-v">
        <div className="container  center-v">
            <div className="content">
                <h1 className="h1-hero-aria">Earth Guardians Blog: Stories, Insights, and Inspiration</h1>
                <p className="pragraph-hero-aria">Welcome to the Earth Guardians Blog! Dive into our latest posts where we explore real stories, share expert insights, and inspire action for a healthier planet. Stay informed and motivated as you journey with us toward a sustainable future.</p>
                <button className="btn-primary" data-content="See More">See More</button>
            </div>
            <VideoHero src={heroVideo} />

        </div>
    </div>)
}


const Post = () => {
    const [isPostHovering, setIsPostHovering] = useState(false)

    return <motion.div
        onMouseEnter={() => setIsPostHovering(true)}
        onMouseLeave={() => setIsPostHovering(false)}
        className="single-post">

        <div className="single-post-content">
            <h6>The Power of Collective Action: How Communities Can Save the Planet</h6>
            <p>Posted on September 15, 2024</p>
        </div>

        <motion.div
            initial={{ y: "100%" }}
            animate={isPostHovering ? { y: `-300px` } : { y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="single-post-hovered">

            <div className="single-post-hovered-content">
                <div className="time-to-read"><h6>4 min to read</h6></div>
                <div className="heading">
                    <h3>The Power of Collective Action: How Communities Can Save the Planet</h3>
                    <p>The Power of Collective Action: How Communities Can Save the Planet</p>
                    <Link to="./article/1">
                        <BtnShadow text="Read more" />
                    </Link>
                </div>
            </div>
        </motion.div>
    </motion.div>
}

const Categories = () => {
    const categories = ["Sustainability Tips", "Climate Change", "Conservation Efforts", "Renewable Energy", "Green Activism"]
    return <div className="categories">
        <button className="category">All</button>
        {categories.map((category, index) => (
            <button className="category">{category}</button>
        ))}

    </div>
}