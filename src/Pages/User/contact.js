import Header from "../../Components/header";
import heroVideo from "../../Assets/Videos/04.mp4";
import Footer from "../../Components/footer";

import { useState, useRef, useEffect } from "react";
import { VideoHero } from "../../Components/prefabs";

export default function Contact() {
    const [result, setResult] = useState("");

    var access_key = process.env.ACCESS_KEY;
    access_key = "d28a827d-7a9e-4c32-95e1-94fde00e5211";

    const sendMsg = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", access_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className="Contact">
            <div className='contact-container center-h '>
                <Header color="white" />
                <HeroSection />
            </div>
            <div className="contact-form center-h">
                <div className="container">
                    <h2>Send us a message</h2>
                    <form onSubmit={sendMsg}>
                        <input placeholder='Fullname' name="fullname" required />
                        <input placeholder='Email' type='email' name="email" required />
                        <textarea placeholder='Message' type='text' name="message" required />
                        <button type="submit" className="btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />

        </div>

    )
}

const HeroSection = () => {


    return (<div className="contact-content   center-h">
        <div className="container">
            <div className="content">
                <h1 className="h1-hero-aria">Get in Touch with Earth Guardians</h1>
                <p className="pragraph-hero-aria">We're here to help and answer any questions you may have about our mission and initiatives. Whether you're interested in collaborating, volunteering, or just learning more about how you can make a difference, feel free to reach out to us. Your support and feedback are invaluable to us as we work together to protect and preserve our planet for future generations. Contact us using the form below or through the provided details, and we'll get back to you as soon as possible.</p>
                <div className="scroll-container">
                    <button className="btn-primary" data-content="Send us a meassage">Send us a meassage</button>
                </div>
            </div>
            <VideoHero src={heroVideo} />
        </div>
    </div>)
}

