import "../main.css"
import "./Blog.css"
import { useState, useEffect } from 'react'
import blogarrow from "./imgs/blogarrow.png"


export default function Blog() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('http://localhost:3009/api/blog');
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Ошибка загрузки планов:', error);
            }
        };

        fetchBlog();
    }, []);
    return (
        <>
            <section className="section__blog">
                <div className="container">
                    <div className="plans__head">
                        <div className="pricing__block"><p>Blog</p></div>
                        <h4>Our latest blogs</h4>
                        <p>Accumsan semper euismod dolor vitae metus.</p>
                    </div>

                    <div className="blog__wrapper">
                        {blog.map((blog, index) => (
                            <div key={index} className="blog__card">
                                <div className="blogimg"><img src={blog.blogimg} /></div>
                                <div className="blog__tags">
                                    <div className="first__tag">{blog.first_tag}</div>
                                    <p className="time__of__read">{blog.time_of_read}</p>
                                </div>
                                <p>{blog.tittle}</p>
                                <p>{blog.description}</p>

                                <div className="blog__bottom">
                                    <div className="blogarrow"><img src={blogarrow} alt="" /></div>
                                    <p>Read more</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}