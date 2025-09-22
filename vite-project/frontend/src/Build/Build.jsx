import "../main.css"
import "./Build.css"
import buildarrow from "./imgs/buildarrow.png"
import buildgrid from "./imgs/buildgrid.png"
import buildimgone from "./imgs/buildimgone.png"
import buildimgtwo from "./imgs/buildimgtwo.png"
import buildimgthree from "./imgs/buildimgthree.png"

export default function Build() {
    return (
        <>
            <section className="build__section">
                <div className="container">
                    <div className="building__wrapper">
                        <img src={buildgrid} alt="" className="buildgrid" />
                        <h2>Building your very own Startup has never been simpler</h2>
                        <p>Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
                            Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.</p>
                        <div className="building__card__wrapper">
                            <div className="building__card">
                                <img src={buildimgone} alt="" />
                                <p>Better results</p>
                                <p>Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt.
                                    Duis sit amet vulputa.</p>
                            </div>
                            <div className="building__card">
                                <img src={buildimgtwo} alt="" />
                                <p>Less paper work</p>
                                <p>Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum.
                                    Aliquam ut sapien enim.</p>
                            </div>
                            <div className="building__card">
                                <img src={buildimgthree} alt="" />
                                <p>More profit</p>
                                <p>Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros.
                                    Proin finibus luctus nisi.</p>
                            </div>
                        </div>
                        <div className="building__btns__wrapper">
                            <button>Get started</button>
                            <button><p>Try for free</p><img src={buildarrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}