import "../main.css"
import './Plans.css'
import wavesimg from "../Speedsec/imgs/wavesimg.png"
import greencard from "./imgs/greencard.png"
// import blackcard from "../../public/imgs/blackcard.png"
import { useState, useEffect } from 'react';

export default function Plans() {
    const [plan, setPlan] = useState([]);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await fetch('http://localhost:3009/api/plan');
                const data = await response.json();
                setPlan(data);
            } catch (error) {
                console.error('Ошибка загрузки планов:', error);
            }
        };

        fetchPlan();
    }, []);
    return (
        <>
            <section className="plans__section">
                <div className="container">
                    <img src={wavesimg} alt="" className="plans__wavesimg" />
                    <div className="plans__head">
                        <div className="pricing__block"><p>Pricing</p></div>
                        <h4>Pricing plans</h4>
                        <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
                    </div>

                    <div className="plans__wrapper">
                        {plan.map((plan, index) => (
                            <div key={index} className="plans__card">
                                <img src={greencard} alt="" className="green__card"/>

                                <p className="name__of__plan">{plan.name}</p>
                                <p className="price__of__plan">{plan.price}</p>
                                <p className="alternative__plan">{plan.alternative}</p>

                                <div className="line"></div>

                                <p className="plans__include">{plan.includes}</p>

                                <ul className="includes__list">
                                    
                                    {[plan.include1, plan.include2, plan.include3, plan.include4, plan.include5]
                                        .filter(include => include && include.trim() !== '') 
                                        .map((include, index) => (
                                            <li key={index}>
                                                <div className="circle"></div>
                                                <p>{include}</p>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <button className="button__plan">Get started</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}