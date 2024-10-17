import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "../../Components/header";
import Footer from "../../Components/footer";

import heroVideo from "../../Assets/Videos/01.mp4";
import postImg_1 from "../../Assets/Imgs/pexels-jplenio-2566845.jpg";

import { BtnShadow, VideoHero } from "../../Components/prefabs";



const categories = ["All", "Sustainability Tips", "Climate Change", "Conservation Efforts", "Renewable Energy", "Green Activism"];

export default function Blog() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5500/articles').then((res) =>
                res.json(),
            ),
    });


    const [selectedCategories, setSelectedCategories] = useState(["All"]);

    const handleCategorySelect = (category) => {
        if (category === "All") {
            setSelectedCategories(["All"]);
        } else {

            if (selectedCategories.includes("All")) {
                setSelectedCategories([category]);
            } else {
                if (selectedCategories.includes(category)) {
                    setSelectedCategories(selectedCategories.filter(cat => cat !== category));
                } else {

                    setSelectedCategories([...selectedCategories, category]);
                }
            }
        }
    };


    const filteredBlogs = selectedCategories.includes("All")
        ? data
        : data?.filter(blog => selectedCategories.includes(blog.category));

    return (
        <div className="Blog">
            <div className="hero-section center-h">
                <Header color="white" />
                <HeroSection />
            </div>

            <div className="blog-container">
                <div className="blog-content center-h" >
                    <div className="container">
                        <div className="category-section">
                            <h6>Filter</h6>
                            <Categories
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onCategorySelect={handleCategorySelect}
                            />
                        </div>

                        <div className="blogs-wrapper">
                            <div className="blogs">
                                {filteredBlogs && filteredBlogs.map((ele, index) => (
                                    <Post
                                        key={index}
                                        title={ele.title}
                                        time={ele.time_to_read}
                                        date={ele.date}
                                        category={ele.category}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

const Categories = ({ categories, selectedCategories, onCategorySelect }) => {
    const handleCheckboxChange = (category) => {
        onCategorySelect(category);
    };

    return (
        <div className="categories">
            <h4>Categories</h4>
            {categories.map((category, index) => (
                <label key={index} className="checkbox-filter">
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                    />
                    {category}
                </label>
            ))}
        </div>
    );
};
const SortBlogs = () => {
    return <div className="sort-by-section">
        <label key={index} className="checkbox-filter">
            <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
            />
            {category}
        </label>
    </div>
}
const Post = ({ title, time, date, category }) => {
    const [isPostHovering, setIsPostHovering] = useState(false);

    return (
        <motion.div className="single-post">
            <motion.div
                onMouseEnter={() => setIsPostHovering(true)}
                onMouseLeave={() => setIsPostHovering(false)}
                className="single-post-img"
            >
                <div className="img">
                    <img src={postImg_1} alt="Post" />
                </div>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={isPostHovering ? { y: `0` } : { y: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="single-post-img-hovered"
                >
                    <div className="time-to-read"><span>{time}</span></div>
                    <div className="heading">
                        <Link to="./article/1">
                            <BtnShadow text="Read more" />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            <div className="single-post-content">
                <div className="details">
                    <Tag text={category} />
                    <h6>{date}</h6>
                </div>
                <h4>{title}</h4>
            </div>
        </motion.div>
    );
}

const HeroSection = () => {
    return (
        <div className="blog-heading center-h center-v">
            <div className="container  center-v">
                <div className="content">
                    <h1 className="h1-hero-aria">Earth Guardians Blog: Stories, Insights, and Inspiration</h1>
                    <p className="pragraph-hero-aria">Welcome to the Earth Guardians Blog! Dive into our latest posts where we explore real stories, share expert insights, and inspire action for a healthier planet. Stay informed and motivated as you journey with us toward a sustainable future.</p>
                    <button className="btn-primary" data-content="See More">See More</button>
                </div>
                <VideoHero src={heroVideo} />
            </div>
        </div>
    );
}


const Tag = ({ text }) => {
    return <div className="tag-category">
        <h6>{text}</h6>
    </div>
}