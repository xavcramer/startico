import cross from "./imgs/cross.png"
import "../main.css"
import "./Explore.css"

export default function Explore() {
    return (
        <>
            <div className="explore__general">
                <div className="container">
                    <div className="explore">
                        <div>
                            <p>Explore all our services.</p>
                            <img src={cross} alt="" className="cross" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}