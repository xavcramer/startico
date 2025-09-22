import "../main.css"
import "./Navcomponent.css"
import logo from "./imgs/logo.png"

export default function Navcomponent() {
    return (
        <>
            <nav>
                <div className="nav__wrapper">
                    <ul className="first__list">
                        <li><a href="#"><img src={logo} alt="" /></a></li>
                        <li><a href="#">Startico</a></li>
                    </ul>

                    <ul className="second__list">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#"><button>Log in</button></a></li>
                        <li><a href="#"><button>Try for free</button></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}