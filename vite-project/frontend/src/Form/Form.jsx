import "./Form.css"
import "../main.css"
import formimg from "./imgs/formimg.png"
import { useState } from "react"

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setMessage('Please enter a valid email address');
            return;
        }

        try {
            const response = await fetch('http://localhost:3009/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage(data.message);
                setEmail('');
            } else {
                setMessage(data.error || 'Subscription failed');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            setMessage('Network error. Please try again.');
        }
    };

    return (
        <>
            <section className="section__form">
                <div className="section__form2">
                    <div className="container">
                        <div className="form__block">
                            <div className="formimg">
                                <img src={formimg} alt="" />
                            </div>
                            <div className="forminsidewrapper">
                                <h6>Stay up to date with the latest news from the Startup world!</h6>
                                <p>Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p>
                                <form onSubmit={handleSubscribe} className="input__wrapper">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email" 
                                        required 
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                                {message && <p className="subscription-message">{message}</p>}
                                <p className="bottomtextform">By clicking Subscribe you're confirming that you agree with our Terms and Conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}