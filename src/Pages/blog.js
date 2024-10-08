import Header from "../Components/header";
import { motion, useInView } from "framer-motion";
import { AnimatedHeading, BtnShadow } from "../Components/prefabs"
import { useRef, useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Components/icons";
import heroVideo from "../Assets/Videos/01.mp4"
import { Link } from "react-router-dom";


export default function Blog() {
    const successSectionRef = useRef(null)
    const isInView = useInView(successSectionRef)


    return (
        <div className="Blog">
            <div className="hero-section center-h">
                <Header color="white" />
                <HeroSection />

            </div>
            <div className="blog-container">
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
                            <BlogCarousel />
                        </div>
                    </div>

                    <div className="success-stories-section" ref={successSectionRef}>
                        <div className="success-stories-content center-h center-v">
                            <div className="container">
                                <SucessStoriesContent />
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: "200px" } : {}}
                                    transition={{ duration: 0.8 }}
                                    style={{ transformOrigin: '0 100%' }}
                                    className="success-stories-img">
                                </motion.div>
                                <SucessStoriesContent />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}
const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error.message);
            });
        }
    }, []);

    return (<div className="blog-heading center-h center-v">
        <div className="container  center-v">
            <div className="content">
                <h1>Earth Guardians Blog: Stories, Insights, and Inspiration</h1>
                <p>Welcome to the Earth Guardians Blog! Dive into our latest posts where we explore real stories, share expert insights, and inspire action for a healthier planet. Stay informed and motivated as you journey with us toward a sustainable future.</p>
                <button className="btn-primary" data-content="See More">See More</button>
            </div>
            <figure class="video-background">
                <video ref={videoRef} muted loop playsinline>
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </figure>
        </div>
    </div>)
}
const Category = ({ title, parag }) => {

    const [isItemHovering, setIsItemHovering] = useState(false)

    const contentRef = useRef();

    const [top, setTop] = useState();

    useEffect(() => {
        const contentheight = contentRef.current.offsetHeight; // or getBoundingClientRect().height
        setTop(-contentheight + 20);

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
            <BtnShadow text="See more" />
        </motion.div>
    </motion.div >
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

const ArrowIcons = ({ direction, carouselRef }) => {
    const [hoverRightIcon, setHoverRightIcon] = useState(false);
    const [hoverLeftIcon, setHoverLeftIcon] = useState(false);


    const scrollCarousel = (direction) => {
        const scrollAmount = 400; // Adjust this value to control scroll distance
        let newScroll

        if (carouselRef.current) {
            const currentScrollPosition = carouselRef.current.scrollLeft;
            const scrollWidth = carouselRef.current.scrollWidth;
            const clientWidth = carouselRef.current.clientWidth;



            if (direction === 'left') {
                newScroll = Math.max(0, currentScrollPosition - scrollAmount)
            } else if (direction === 'right') {
                newScroll = Math.min(scrollWidth - clientWidth, currentScrollPosition + scrollAmount)

            }

            console.log(newScroll)

            carouselRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth' // Native smooth scrolling
            });
        }
    };

    return (
        <motion.button
            onMouseEnter={() => (direction === 'left' ? setHoverLeftIcon(true) : setHoverRightIcon(true))}
            onMouseLeave={() => (direction === 'left' ? setHoverLeftIcon(false) : setHoverRightIcon(false))}
            onClick={() => scrollCarousel(direction)} // Fix: passing function reference
            className={direction === 'left' ? 'left' : 'right'}
        >
            {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}

            <motion.span
                initial={{ width: '0', height: '0' }}
                animate={direction === 'left' ? hoverLeftIcon ? { width: '100%', height: '100%' } : { width: '0', height: '0' } :
                    hoverRightIcon ? { width: '100%', height: '100%' } : { width: '0', height: '0' }}
                transition={{ duration: 0.2 }}
            />
        </motion.button>
    );
};

const BlogCarousel = () => {
    const carouselRef = useRef();
    const [isIconRightVisible, setIsIconRightVisible] = useState(true);
    const [isIconLeftVisible, setIsIconLeftVisible] = useState(false);
    const [scale, setScale] = useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const scrollWidth = carouselRef.current.scrollWidth;
                const clientWidth = carouselRef.current.clientWidth;

                setScrollPosition(scrollLeft);

                if (scrollLeft === 0) {
                    setIsIconLeftVisible(false);
                    setIsIconRightVisible(true);
                    setScale(1); // Hide right arrow at the end
                    // Hide left arrow at the start
                }

                else if (scrollLeft + clientWidth >= scrollWidth) {
                    setIsIconRightVisible(false); // Hide right arrow at the end
                    setIsIconLeftVisible(true);
                    setScale(0);

                } else {
                    setIsIconLeftVisible(true);
                    setIsIconRightVisible(true);
                    setScale(0);

                }
            }
        };

        const ref = carouselRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (ref) {
                ref.removeEventListener('scroll', handleScroll);
            }
        };

    }, [])

    return <div className="latest-post-section" >
        <div className="latest-post-carousel" ref={carouselRef}>
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale }}
                transition={{ duration: 0.2 }}
                className="browse-articles">

                <h4>See our more articles and browse</h4>
                <button className="btn-primary" data-content="Browse more" >browse more</button>

            </motion.div>
            <div className="posts-grid">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>

        <div className="icons">
            {isIconLeftVisible && (
                <div className="left-icon">
                    <ArrowIcons direction="left" carouselRef={carouselRef} />
                </div>
            )}
            {isIconRightVisible && (
                <div className="right-icon">
                    <ArrowIcons direction="right" carouselRef={carouselRef} />
                </div>
            )}

        </div>
    </div>
}

const SucessStoriesContent = () => {

    return (<div className="success-stories-heading">
        <h5>Success Stories</h5>
        <h2>How One Community Reduced Its Carbon Footprint by 50%</h2>
        <p>Discover the inspiring journey of a small town that implemented green initiatives and became a model for sustainable living.</p>
        <BtnShadow text="See more" />
    </div>)

}