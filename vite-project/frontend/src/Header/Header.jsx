import "../main.css"
import "./Header.css"
import headerfirstimg from "./imgs/headerfirstimg.png"
import headersecondimg from "./imgs/headersecondimg.png"
import headerthirdimg from "./imgs/headerthirdimg.png"
import headbtnarrow from "./imgs/headbtnarrow.png"
import logoipsumone from "./imgs/logoipsumone.png"
import logoipsumtwo from "./imgs/logoipsumtwo.png"
import logoipsumthree from "./imgs/logoipsumthree.png"
import logoipsumfour from "./imgs/logoipsumfour.png"
import headerwomen from "./imgs/headerwomen.png"

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <img src={headerfirstimg} alt="" className="headerfirstimg" />
                    <img src={headersecondimg} alt="" className="headersecondimg" />
                    <img src={headerthirdimg} alt="" className="headerthirdimg" />

                    <div className="headinfo">
                        <h1>Head start your business today!</h1>
                        <p>Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.</p>
                        <div className="head__btns__wrapper">
                            <button>Get started</button>
                            <button><p>Try for free</p><img src={headbtnarrow} alt="" /></button>
                        </div>
                        <div className="logoipsum__wrapper">
                            <ul className="logoipsum__list">
                                <li><img src={logoipsumone} alt="" /></li>
                                <li>logoipsum</li>
                            </ul>
                            <ul className="logoipsum__list">
                                <li><img src={logoipsumtwo} alt="" /></li>
                                <li>logoipsum</li>
                            </ul>
                            <ul className="logoipsum__list">
                                <li><img src={logoipsumthree} alt="" /></li>
                                <li>logoipsum</li>
                            </ul>
                            <ul className="logoipsum__list">
                                <li><img src={logoipsumfour} alt="" /></li>
                                <li>logoipsum</li>
                            </ul>
                        </div>
                    </div>
                    <img src={headerwomen} alt="" className="headerwomen"/>
                    <button className="watch__introduction">Watch Introduction</button>
                </div>
            </header>
        </>
    )
}