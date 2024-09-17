import { motion, useInView } from "framer-motion"
import { useRef } from "react"

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
        {console.log(chars)}
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