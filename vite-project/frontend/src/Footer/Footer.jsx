import "../main.css"
import "./Footer.css"
import logo from "../Navcomponent/imgs/logo.png"
import inn from "./imgs/inn.png"
import twitter from "./imgs/twitter.png"
import facebook from "./imgs/facebook.png"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__leftbar">
                            <div className="footerlogowrapper">
                                <img src={logo} alt="" />
                                <p>Startico</p>
                            </div>
                            <div>
                                <p>Address:</p>
                                <p>Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
                            </div>
                            <div>
                                <p>Contact:</p>
                                <p>1800 123 4567</p>
                                <p>info@startico.io</p>
                            </div>
                        </div>
                        <div className="footer__rightbar">
                            <ul>
                                <li>Pages</li>
                                <li>Home v1</li>
                                <li>Home v2</li>
                                <li>Home v3</li>
                                <li>About v1</li>
                                <li>About v2</li>
                                <li>About v3</li>
                                <li>Contact v1</li>
                                <li>Contact v2</li>
                                <li>Contact v3</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                                <li>Log in</li>
                                <li>Sign up</li>
                            </ul>
                            <ul>
                                <li>CMS pages</li>
                                <li>Blog Post</li>
                                <li>Blog Categories</li>
                            </ul>
                            <ul>
                                <li>Utility pages</li>
                                <li>Style guide</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                                <li>404</li>
                                <li>Password</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footerbottomwrapper">
                        <ul>
                            <li>© Startico by</li>
                            <li>Minima Square.</li>
                            <li>Powered by</li>
                            <li>Webflow.</li>
                        </ul>
                        <div className="footercontactswrapper">
                            <div className="contact__circle"><img src={inn} alt="" /></div>
                            <div className="contact__circle"><img src={twitter} alt="" /></div>
                            <div className="contact__circle"><img src={facebook} alt="" /></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}