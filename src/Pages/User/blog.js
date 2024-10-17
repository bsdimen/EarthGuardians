import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

    function handleCategorySelect(category) {
        if (category === "All" || selectedCategories.length == 0) {
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

    const [selectedSort, setSelectedSort] = useState(null);

    function handelSelectedSort(sort) {
        if (sort) {
            if (selectedSort === sort) {
                setSelectedSort(null)
            }
            else {
                setSelectedSort(sort)
            }
        }

    }
    const filteredBlogs = selectedCategories.includes("All")
        ? data
        : data?.filter(blog => selectedCategories.includes(blog.category));

    const sortedBlogs = selectedSort == null ? filteredBlogs
        : selectedSort === "A-Z"
            ? filteredBlogs.sort((a, b) => a.title.localeCompare(b.title))
            : filteredBlogs.sort((a, b) => b.title.localeCompare(a.title));
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
                            <SortBlogs
                                selectedSort={selectedSort}
                                handelSelectedSort={handelSelectedSort}
                            />
                        </div>

                        <div className="blogs-wrapper">
                            <div className="blogs">
                                {sortedBlogs && sortedBlogs.map((ele, index) => (
                                    <Post
                                        key={index}
                                        props={ele}
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
        <div className="group-filter">
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
const SortBlogs = ({ selectedSort, handelSelectedSort }) => {
    return <div className="group-filter">
        <h4>Sort by </h4>
        <label className="checkbox-filter">
            <input
                type="checkbox"
                checked={selectedSort === "A-Z"}
                onChange={() => handelSelectedSort("A-Z")}
            />
            A-Z
        </label>
        <label className="checkbox-filter">
            <input
                type="checkbox"
                checked={selectedSort === "Z-A"}
                onChange={() => handelSelectedSort("Z-A")}
            />
            Z-A
        </label>
    </div >
}
const Post = ({ props }) => {
    const [isPostHovering, setIsPostHovering] = useState(false);
    const navigate = useNavigate();


    const handelBlogLink = () => {

        navigate(`./article/${props.id}`)
    }
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
                    <div className="time-to-read"><span>{props.time}</span></div>
                    <div className="heading">
                        <BtnShadow text="Read more" action={handelBlogLink} />
                    </div>
                </motion.div>
            </motion.div>

            <div className="single-post-content">
                <div className="details">
                    <Tag text={props.category} />
                    <h6>{props.date}</h6>
                </div>
                <h4>{props.title}</h4>
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