import "../main.css"
import "./Efficient.css"
import efficientimg1 from "./imgs/efficientimg1.png"
import efficientimgone from "./imgs/efficientimgone.png"
import efficientimgtwo from "./imgs/efficientimgtwo.png"
import efficientimgthree from "./imgs/efficientimgthree.png"
import efficientarrow from "./imgs/efficientarrow.png"


export default function Efficient() {
    return (
        <>
            <section className="efficient__section">
                <div className="container">
                    <div className="efficient__general__wrapper">
                        <div className="efficient__first__wrapper">
                            <div className="efficient__block"><p>Efficient</p></div>
                            <h2>Straight to the point</h2>
                            <p>Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.</p>
                            <div className="pluses__wrapper">
                                <div className="meetings">
                                    <img src={efficientimgone} alt="" className="pluses__img" />
                                    <p>No meetings</p>
                                    <p>Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.</p>
                                </div>
                                <div className="support">
                                    <img src={efficientimgtwo} alt="" className="pluses__img" />
                                    <p>24/7 customer support</p>
                                    <p>Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="efficient__second__wrapper">
                            <img src={efficientimg1} alt="" />
                            <div className="productivity__wrapper">
                                <ul className="productivity__first__list">
                                    <li className="procent">74%</li>
                                    <li className="increased">Increased in productivity</li>
                                </ul>
                                <ul className="productivity__second__list">
                                    <li><img src={efficientimgthree} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div className="efficient__btns__wrapper">
                            <button>Get started</button>
                            <button><p>Try for free</p><img src={efficientarrow} alt="" /></button>
                        </div>
                </div>
            </section>
        </>
    )
}