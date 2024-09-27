import Header from "../Components/header";
import heroVideo from "../Assets/Videos/04.mp4";
import Footer from "../Components/footer";

import { useRef, useEffect } from "react";
export default function Contact() {
    const submitMsg = () => {

    }
    return (
        <div className="Contact">
            <div className='contact-container center-h '>
                <Header color="white" />
                <HeroSection />
            </div>
            <div className="contact-form center-h">
                <div className="container">
                    <h2>Send us a message</h2>
                    <form>
                        <input placeholder='Fullname' required />
                        <input placeholder='Email' type='email' required />
                        <textarea placeholder='Message' type='text' required />
                        <button className="btn-secondary" onSubmit={submitMsg()}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />

        </div>

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

    return (<div className="contact-content  center-v">
        <div className="container  center-v center-h">
            <div className="content">
                <h1>Get in Touch with Earth Guardians</h1>
                <p>We're here to help and answer any questions you may have about our mission and initiatives. Whether you're interested in collaborating, volunteering, or just learning more about how you can make a difference, feel free to reach out to us. Your support and feedback are invaluable to us as we work together to protect and preserve our planet for future generations. Contact us using the form below or through the provided details, and we'll get back to you as soon as possible.</p>
                <div className="scroll-container">
                    <button className="btn-primary" data-content="Send us a meassage">Send us a meassage</button>
                </div>
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

