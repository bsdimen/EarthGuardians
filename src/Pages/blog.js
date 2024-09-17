import Header from "../Components/header";
import { motion } from "framer-motion";
import { AnimatedHeading } from "../Components/prefabs"
import { useRef, useState, useEffect } from "react";


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
                </div>
            </div>
        </div>

    )
}

const Category = ({ title, parag }) => {

    const [isItemHovering, setIsItemHovering] = useState(false)
    const contentRef = useRef();
    const parentRef = useRef();


    let top;

    useEffect(() => {
        const contentheight = contentRef.current.offsetHeight; // or getBoundingClientRect().height
        console.log(`cHeight: ${contentheight}px`);

        const parentheight = parentRef.current.offsetHeight; // or getBoundingClientRect().height
        console.log(`pHeight: ${parentheight}px`);

        top = - (100 - ((contentheight * 100) / parentheight));
        console.log(`top: ${top}`);
    }, [contentRef, parentRef]);

    return <motion.div
        onMouseEnter={() => setIsItemHovering(true)}
        onMouseLeave={() => setIsItemHovering(false)}
        ref={parentRef}
        className="category-item">
        <div className="category-info"
            ref={contentRef}>
            <h6>{title}</h6>
            <p>{parag}</p>
        </div>
        <motion.div
            className="category-hover"
            initial={{ y: "100%" }}
            animate={isItemHovering ? { y: { top } } : { y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }} // Optional: Adjust the spring effect
        >
            <button className="btn-shadow">See More</button>
        </motion.div>
    </motion.div >
}