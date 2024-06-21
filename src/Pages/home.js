import Header from '../Components/RootLayout';
import heroImg from '../IMGS/hero-section-img.jpg';
import Iconinit from '../IMGS/Icons/climate-change-icon.svg';
import linesImg from '../IMGS/lines-img.jpg';


export default function Home () {
    return (
        <div className="Home">
        <section className="container hero-section">
            <div className="hero-text">
                <h1>Welcome to Our <span>Environmental <img src={linesImg} /></span> Protection Hub</h1>
                <p>At EarthGuardians, we are committed to safeguarding our planet and promoting sustainable living practices. Our mission is to raise awareness about environmental issues, advocate for policy changes, and empower individuals and communities to take action towards a healthier, more sustainable future
                </p>
                <button className="btn-primary">Get Started</button>
            </div>
            <div className="hero-img">
                  <img src= {heroImg} alt=""/>
            </div>
        </section>
        <section className="our-initiatives">
          <h1>Our Initiatives</h1>
           <div className="ini-container">
                <div className="intiative-contents">
                   <div className="single-intiative-content" id="#intCon">
                        <img src={Iconinit} alt='' />
                        <div className="intiative-content" >
                                <h3 id="invTit">Conservation Efforts</h3>
                                <p id="invPara">We work tirelessly to protect and preserve our natural resources, including forests, oceans, and wildlife habitats. Through initiatives such as reforestation projects, beach clean-ups, and wildlife conservation programs, we strive to restore and maintain the delicate balance of ecosystems worldwide.</p>
                        </div>
                   </div>
                   <div className="single-intiative-content" id="#intCon">
                        <img src={Iconinit} alt='' />
                        <div className="intiative-content" >
                                <h3 id="invTit">Conservation Efforts</h3>
                                <p id="invPara">We work tirelessly to protect and preserve our natural resources, including forests, oceans, and wildlife habitats. Through initiatives such as reforestation projects, beach clean-ups, and wildlife conservation programs, we strive to restore and maintain the delicate balance of ecosystems worldwide.</p>
                        </div>
                   </div>
                   <div className="single-intiative-content" id="#intCon">
                        <img src={Iconinit} alt='' />
                        <div className="intiative-content" >
                                <h3 id="invTit">Conservation Efforts</h3>
                                <p id="invPara">We work tirelessly to protect and preserve our natural resources, including forests, oceans, and wildlife habitats. Through initiatives such as reforestation projects, beach clean-ups, and wildlife conservation programs, we strive to restore and maintain the delicate balance of ecosystems worldwide.</p>
                        </div>
                   </div>  
                </div>
           </div>
            
        </section>
        <section className="get-involved">
            <div className="roles-grid">
                <div className="role-item">
                   
                    <h4>Volonteer</h4>
                    <p>Join us for local clean-up events, tree planting initiatives, or educational workshops in your community</p>
                </div>
                <div className="role-item">
                   
                    <h4>Donate</h4>
                    <p>Your generous contributions help fund our conservation projects, advocacy efforts, and outreach programs.</p>
                </div>
                <div className="role-item">
                   
                    <h4>Spread the Word</h4>
                    <p>Follow us on social media, share our content, and raise awareness about environmental issues in your network.</p>
                </div>
                <div className="role-item">
                   
                    <h4>Take Action</h4>
                    <p>Sign petitions, contact your elected officials, and participate in advocacy campaigns to drive positive change at the local, national, and global levels.</p>
                </div>

            </div>
        </section>
    </div>

    )
}