import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export const AnimatedHeading = ({ text, Heading, className }) => {
    const ref = useRef();
    const isInView = useInView(ref, { amount: 0.5 })

    const textAnimation = {
        visible: {
            scaleY: 1,
            visibility: "visible"

        },
        hidden: {
            scaleY: 0,
            visibility: "hidden"
        }
    }
    const chars = text.split("");

    if (typeof text !== 'string') {
        return null; // Handle the case where text is not a string
    }


    return <motion.h2
        ref={ref}
        transition={{ duration: 2 }}
        aria-hidden
        className={"animated-text " + className}>
        {chars.map((char, index) => (
            <motion.span
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textAnimation}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="char">
                {char}
            </motion.span>
        ))}
        <motion.span
            initial={{ right: "100%", left: "0" }} // Start off-screen
            animate={isInView ? { right: "0", left: "100%" } : { right: "100%" }} // Adjust x based on character width
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth movement

            className="animated-bar"></motion.span>
    </motion.h2>
}

export const BtnShadow = ({ text, fun }) => {
    const [IsBtnHovering, setIsBtnHovering] = useState(false)

    return <motion.button
        onMouseEnter={() => setIsBtnHovering(true)}
        onMouseLeave={() => setIsBtnHovering(false)}
        animate={IsBtnHovering ? { color: "#06a52e", borderColor: "#06a52e" } : { color: "#F5F5F5", borderColor: "#F5F5F5" }}
        className="btn-shadow white relative"
        onClick={fun}>
        <span>{text}</span>
        <motion.span
            initial={{ width: "0", height: "0" }}
            animate={IsBtnHovering ? { width: "100%", height: "100%" } : { width: "0", height: "0" }}
            transition={{ duration: 0.2 }}
            className="btn-animation"></motion.span>
    </motion.button>
}

export const VideoHero = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error.message);
            });
        }
    }, []);
    return <figure class="video-background">
        <video ref={videoRef} muted loop playsinline>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </figure>
}