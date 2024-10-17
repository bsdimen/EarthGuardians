
import { ArrowLeftIcon, ArrowRightIcon, AddIcon } from "../../Components/icons";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { BtnShadow, VideoHero, BtnPrimary, BtnCTA } from "../../Components/prefabs";
import { useRef, useState, useEffect } from "react";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import heroVideo from "../../Assets/Videos/06.mp4";
import ressImg_1 from "../../Assets/Imgs/pexels-richa-varshney-3635708-9510451.jpg"
import { useQuery } from "@tanstack/react-query";


export default function Home() {
    return (
        <section className="Home">
            <div className='hero-section center-h'>
                <Header color="white" />
                <HeroSection />
            </div>
            <div className="home-content">
                <div className="our-mission center-h">
                    <div className="container">
                        <div className="our-mission-heading">
                            <h2 className="h1-hero-aria">Our Mission</h2>
                            <p>At Earth Guardians, we focus on three core pillars to drive global change</p>
                        </div>
                        <OurMissionElements />
                    </div>


                </div>

                <OurBlogSection />
                <EducationalRessSection />
                <GetInvolvedSection />
            </div>
            <Footer />

        </section>

    )
}

const HeroSection = () => {
    return (
        <div className="home-heading center-h center-v">
            <div className="container  center-v">
                <div className="content">
                    <h1 className="h1-hero-aria">Earth Guardians: Protecting Our Planet for Future Generations</h1>
                    <p className="pragraph-hero-aria">Join the movement to safeguard our Earth through education, conservation, and action</p>
                    <BtnCTA text="See More" />
                </div>
                <VideoHero src={heroVideo} />
            </div>
        </div>
    );
}

const OurMissionElements = () => {
    const elements = [
        {
            title: "Conservation",
            description: "We work to protect vital ecosystems, wildlife, and natural resources through conservation efforts and sustainability initiatives."
        },
        {
            title: "Education",
            description: "We provide resources and programs to educate people about environmental issues and empower them to take informed action."
        },
        {
            title: "Activism",
            description: "We mobilize communities to advocate for policies that promote a sustainable future and fight against climate change."
        }
    ]

    const [openedElementIndex, setOpenedElementIndex] = useState(null);

    return (
        <div className="our-missions-elements">
            {elements.map((ele, index) => (
                <div
                    className={`mission ${openedElementIndex === index ? "active" : ""}`}
                    key={index}
                >
                    <div
                        className="mission-heading"
                        onClick={() => setOpenedElementIndex(openedElementIndex === index ? null : index)}
                    >
                        <h4>{ele.title}</h4>
                        <AddIcon />
                    </div>
                    {openedElementIndex === index && (
                        <div className="mission-paragraph">
                            <p>{ele.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

}

const OurBlogSection = () => {
    const carouselRef = useRef();
    const itemRef = useRef(null);

    const [isIconRightVisible, setIsIconRightVisible] = useState(true);
    const [isIconLeftVisible, setIsIconLeftVisible] = useState(false);

    const handelRefItem = (ref) => {
        itemRef.current = ref;
        console.log(itemRef)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const scrollWidth = carouselRef.current.scrollWidth;
                const clientWidth = carouselRef.current.clientWidth;


                if (scrollLeft === 0) {
                    setIsIconLeftVisible(false);
                    setIsIconRightVisible(true);
                }

                else if (scrollLeft + clientWidth >= scrollWidth) {
                    setIsIconRightVisible(false);
                    setIsIconLeftVisible(true);
                } else {
                    setIsIconLeftVisible(true);
                    setIsIconRightVisible(true);

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
    return <div className="our-blog center-h">
        <div className="container">
            <div className="our-blog-heading">
                <h2 className="h1-hero-aria">Latest From Our Blog</h2>
            </div>
            <div className="our-blog-carousel">
                <div className="our-blog-carousel-items" ref={carouselRef}>
                    <FetchedBlogs handelRefItem={handelRefItem} />

                </div>
                <div className="carousel-icons">
                    <span className="carousel-square"></span>
                    <span className="carousel-square"></span>
                    <span className="carousel-square"></span>
                    <span className="carousel-square"></span>

                </div>
                <div className="arrow-icons">
                    {isIconLeftVisible && (
                        <div className="left-icon">
                            <ArrowIcons direction="left" carouselRef={carouselRef} itemRef={itemRef} />
                        </div>
                    )}
                    {isIconRightVisible && (
                        <div className="right-icon">
                            <ArrowIcons direction="right" carouselRef={carouselRef} itemRef={itemRef} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    </div>
}

const ArrowIcons = ({ direction, carouselRef, itemRef }) => {
    const [hoverRightIcon, setHoverRightIcon] = useState(false);
    const [hoverLeftIcon, setHoverLeftIcon] = useState(false);


    const scrollCarousel = (direction) => {
        const scrollAmount = itemRef.current.offsetWidth;
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
            onClick={() => scrollCarousel(direction)}
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

const FetchedBlogs = (props) => {
    const { data } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs })
    const itemRef = useRef(null);

    async function fetchBlogs() {
        try {

            const response = await fetch("http://localhost:5500/articles");

            const blogs = await response.json();

            return blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    useEffect(() => {
        props.handelRefItem(itemRef.current);
    }, [])
    if (!Array.isArray(data) || data.length === 0) {
        return <p>No blogs available.</p>;
    }
    return data.map((blog) => (<div className="our-blog-carousel-item" key={blog.id} ref={!itemRef.current ? itemRef : null}>
        <div className="content">
            <span>{blog.category}</span>
            <h3>{blog.title}</h3>
            <span>{blog.author}</span>
            <p>{blog.description}</p>
            <BtnPrimary text="Read more" />
        </div>
        <div className="img">
            <img src={ressImg_1} />
        </div>
    </div>
    ))

}

const EducationalRessSection = () => {
    const [elementHovered, setElementHovered] = useState(null)

    const resources = [
        {
            id: 1,
            title: "Books",
            description: "Discover books that will help you increase your awareness, offering a collection of the best updated books that suit your interests and reading style.",
        },
        {
            id: 2,
            title: "Documentaries",
            description: "Explore documentaries that will help you increase your knowledge, curated for those seeking updated and insightful viewing content.",
        },
        {
            id: 3,
            title: "Articles",
            description: "Find articles that will help expand your awareness, with a curated collection of the most recent and insightful reads available online.",
        }
    ];


    return <div className="educational-ress-section center-h">
        <div className="container">
            <div className="educational-ress-heading">
                <h2 className="h1-hero-aria">Explore Our Resources</h2>
                <p>Learn how you can make a difference with our library of educational materials. Whether you're a student, educator, or activist, we offer tools to support environmental stewardship.</p>
            </div>
            <div className="educational-ress-elements">
                {resources.map((item, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setElementHovered(index)}
                        onMouseLeave={() => setElementHovered(null)}
                        initial={{ backgroundColor: "#06a52e" }}
                        animate={elementHovered == index ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#06a52e" }}
                        className="educational-ress-element">
                        <motion.div
                            initial={{ y: "400%" }}
                            animate={elementHovered == index ? { y: "0" } : { y: "400%" }}
                            transition={{ duration: 0.3 }}
                            className="educational-ress-heading">
                            <motion.h2
                                initial={{ color: "#fff" }}
                                animate={elementHovered == index ? { color: "#222222" } : { color: "#fff" }}
                            >
                                {item.title}
                            </motion.h2>
                        </motion.div>
                        <motion.div
                            initial={{ y: "150%" }}
                            animate={elementHovered == index ? { y: "0" } : { y: "150%" }}
                            transition={{ duration: 0.3 }}
                            className="educational-ress-hover">
                            <p>{item.description}</p>
                            <BtnPrimary text="Browse" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
}

const GetInvolvedSection = () => {
    return <div className="get-involved-section center-h">
        <div className="container">
            <div className="get-involved-heading">
                <h2 className="h1-hero-aria">Take Action</h2>
                <p>our actions can make a difference. Here's how you can contribute to the Earth Guardians' mission:</p>
            </div>
            <div className="get-involved-roles">
                <div className="get-involved-role">
                    <h3>Volunteer</h3>
                    <p>Join one of our local or global projects to help restore ecosystems, plant trees, and educate communities.</p>
                    <BtnCTA text="Volunteer Now" />

                </div>
                <div className="get-involved-role">
                    <h3>Donate</h3>
                    <p>Support our work with a financial contribution. Every donation helps us fight for a sustainable future.</p>
                    <BtnCTA text="Donate" />
                </div>
                <div className="get-involved-role">
                    <h3>Spread the Word</h3>
                    <p>Share our mission on social media, start conversations, and raise awareness about the urgent need to protect our planet.</p>
                    <BtnCTA text="Newsletter Sign-Up" />

                </div>
            </div>
        </div>
    </div>
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
const SucessStoriesContent = () => {

    return (<div className="success-stories-heading">
        <h5>Success Stories</h5>
        <h2>How One Community Reduced Its Carbon Footprint by 50%</h2>
        <p>Discover the inspiring journey of a small town that implemented green initiatives and became a model for sustainable living.</p>
        <BtnShadow text="See more" />
    </div>)

}