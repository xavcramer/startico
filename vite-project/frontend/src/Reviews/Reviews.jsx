import "./Reviews.css"
import "../main.css"
import reviewstar from "./imgs/reviewstar.png"
import reviews_topimg from "./imgs/reviews_topimg.png"
import reviews_bottomimg from "./imgs/reviews_bottomimg.png"

import { useState, useEffect } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:3009/api/reviews');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Ошибка загрузки отзывов:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <>
            <section className="reviews__section">
                <div className="container">
                    <h4>A words from our customers</h4>
                    <p className="subtittle">Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
                    <div className="reviews__list">
                        {reviews.map((reviews, index) => (
                            <div key={index} className="review__item">
                                <div className="review__header">
                                    <ul className="stars__list">
                                        <li><img src={reviewstar} alt="" /></li>
                                        <li><img src={reviewstar} alt="" /></li>
                                        <li><img src={reviewstar} alt="" /></li>
                                        <li><img src={reviewstar} alt="" /></li>
                                        <li><img src={reviewstar} alt="" /></li>
                                    </ul>
                                    <p className="reviews__text">{reviews.text_reviews}</p>
                                    <div className="bottom__review__container">
                                        <img src={reviews.avatar}/>
                                        <div className="name__position">
                                            <h3>{reviews.name}</h3>
                                            <p>{reviews.position}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <img src={reviews_topimg} alt="" className="reviews__topimg"/>
                <img src={reviews_bottomimg} alt="" className="reviews__bottomimg"/>
            </section>
        </>
    )
}