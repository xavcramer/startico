import "./Speedsec.css"
import "../main.css"
import salesimg from "./imgs/salesimg.png"
import speedsecarrow from "./imgs/speedsecarrow.png"
import wavesimg from "./imgs/wavesimg.png"
import speedsecimg1 from "./imgs/speedsecimg1.png"

export default function Speedsec() {
    return (
        <>
            <section className="speed__section">
                <div className="container">
                    <img src={wavesimg} alt="" className="wavesimg" />
                    <div className="speedsec__general__wrapper">
                        <div className="speedsec__first__wrapper">
                            <img src={speedsecimg1} alt="" />
                            <div className="sales__wrapper">
                                <ul className="sales__first__list">
                                    <li className="procent">86%</li>
                                    <li className="increased">Increased in sales</li>
                                </ul>
                                <ul className="sales__second__list">
                                    <li><img src={salesimg} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="speedsec__second__wrapper">
                            <div className="speed__block"><p>Speed</p></div>
                            <h2>Faster than ever before</h2>
                            <p>Morbi tristique cursus diam, at viverra felis malesuada eu.
                                Duis iaculis velit ac urna fermentum interdum.
                                Ut auctor vitae nisi eget varius.
                                Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.</p>
                            <div className="speedsec__btns__wrapper">
                                <button>Get started</button>
                                <button><p>Try for free</p><img src={speedsecarrow} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}