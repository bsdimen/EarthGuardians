
export default function Contact () {
    const submitMsg = () => {

    }
    return (
        <div className="Contact">
            <div className='contact-container'>
                <div className='contact-content'>
                    <div className='content'>
                        <h2>Get in Touch with Earth Guardians</h2>
                        <p>We're here to help and answer any questions you may have about our mission and initiatives. Whether you're interested in collaborating, volunteering, or just learning more about how you can make a difference, feel free to reach out to us. Your support and feedback are invaluable to us as we work together to protect and preserve our planet for future generations. Contact us using the form below or through the provided details, and we'll get back to you as soon as possible.</p>
                    </div>
                <form className='contact-form'>
                    <input placeholder='name' required/>
                    <input placeholder='email' type='email' required/>
                    <input placeholder='message' type='text' required/>
                    <button onSubmit={submitMsg()}>Submit</button>
                </form>
                </div>
                <div className='contact-img'>
                </div>
            </div>
        </div>

    )
}