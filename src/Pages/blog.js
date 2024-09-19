import Header from "../Components/header";
import { motion } from "framer-motion";
import { AnimatedHeading } from "../Components/prefabs"
import { useRef, useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Components/icons";

export default function Blog() {


    return (
        <div className="Blog">
            <div className="center-h">
                <Header />

            </div>
            <div className="blog-container">
                <div className="blog-heading center-h center-v">
                    <div className="container">
                        <h1>Earth Guardians Blog: Stories, Insights, and Inspiration</h1>
                        <p>Welcome to the Earth Guardians Blog! Dive into our latest posts where we explore real stories, share expert insights, and inspire action for a healthier planet. Stay informed and motivated as you journey with us toward a sustainable future.</p>
                        <button className="btn-primary" data-content="See More">See More</button>
                    </div>
                </div>
                <div className="blog-content">
                    <div className="what-are-intreseted-section  center-h center-v">
                        <div className="container">
                            <AnimatedHeading text="What are intressed in reading today ?" Heading="h2" className="test" />
                            <div className="categories">
                                <Category title="Sustainability Tips" parag="Simple, practical advice for reducing your environmental impact in daily life." />
                                <Category title="Sustainability Tips" parag="Simple, practical advice for reducing your environmental impact in daily life." />
                                <Category title="Sustainability Tips" parag="Simple, practical advice for reducing your environmental impact in daily life." />
                                <Category title="Sustainability Tips" parag="Simple, practical advice for reducing your environmental impact in daily life." />
                                <Category title="Sustainability Tips" parag="Simple, practical advice for reducing your environmental impact in daily life." />

                            </div>
                        </div>
                    </div>

                    <div className="latest-posts-section center-h center-v">
                        <div className="container">
                            <div className="latest-post-carsoul">
                                <div className="browse-articles">
                                    <h4>See our more articles and browse</h4>
                                    <button className="btn-primary" data-content="Browse more" >browse more</button>
                                </div>
                                <div className="posts-grid">
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

const Category = ({ title, parag }) => {

    const [isItemHovering, setIsItemHovering] = useState(false)
    const [IsBtnHovering, setIsBtnHovering] = useState(false)

    const contentRef = useRef();

    const [top, setTop] = useState();

    useEffect(() => {
        const contentheight = contentRef.current.offsetHeight; // or getBoundingClientRect().height
        console.log(`cHeight: ${contentheight}px`);
        setTop(-contentheight + 20);

        console.log(`top: ${top}`);
    }, [contentRef]);

    return <motion.div
        onMouseEnter={() => setIsItemHovering(true)}
        onMouseLeave={() => setIsItemHovering(false)}
        className="category-item">
        <div className="category-info"
            ref={contentRef}>
            <h6>{title}</h6>
            {/* <p>{parag}</p> */}
        </div>
        <motion.div
            className="category-hover"
            initial={{ y: "100%" }}
            animate={isItemHovering ? { y: `${top}px` } : { y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }} // Optional: Adjust the spring effect
        >
            <motion.button
                onMouseEnter={() => setIsBtnHovering(true)}
                onMouseLeave={() => setIsBtnHovering(false)}
                animate={IsBtnHovering ? { color: "#4E8905", borderColor: "#4E8905" } : { color: "#F5F5F5", borderColor: "#F5F5F5" }}
                className="btn-shadow whtite relative">
                See More
                <motion.span
                    initial={{ width: "0", height: "0" }}
                    animate={IsBtnHovering ? { width: "100%", height: "100%" } : { width: "0", height: "0" }}
                    transition={{ duration: 0.2 }}
                    className="btn-animation"></motion.span>
            </motion.button>
        </motion.div>
    </motion.div >
}

const Post = () => {
    return <div className="single-post">
        <div className="single-post-content">
            <h6>The Power of Collective Action: How Communities Can Save the Planet</h6>
            <p>Posted on September 15, 2024</p>
        </div>
    </div>
}

const Icons = () => {
    const [hoverRightIcon, setHoverRightIcon] = useState(false);
    const [hoverLeftIcon, setHoverLeftIcon] = useState(false);

    return <div className="icons">
        <motion.button
            onMouseEnter={() => setHoverLeftIcon(true)}
            onMouseLeave={() => setHoverLeftIcon(false)}
            className="left">
            <ArrowLeftIcon />
            <motion.span
                initial={{ width: "0", height: "0" }}
                animate={hoverLeftIcon ? { width: "100%", height: "100%" } : { width: "0", height: "0" }}
                transition={{ duration: 0.2 }}
            ></motion.span>
        </motion.button>
        <motion.button
            onMouseEnter={() => setHoverRightIcon(true)}
            onMouseLeave={() => setHoverRightIcon(false)}
            className="right">
            <ArrowRightIcon />
            <motion.span
                initial={{ width: "0", height: "0" }}
                animate={hoverRightIcon ? { width: "150%", height: "150%" } : { width: "0", height: "0" }}
                transition={{ duration: 0.2 }}
            ></motion.span>
        </motion.button>
    </div>
}