import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './style.css'

const Section = (props) => {

    return(
        <>
            <section>
                
                <div id="container-cards">
                    {
                        (props.menu).map((card)=>{

                            return (
                               
                                <Link to={card.url} className="card" key={card.text}>
            
                                    <div className="image-card">
                                        <img src={card.image} alt={card.text} />
                                    </div>
                                    <p className="text-card">{card.text}</p>

                                </Link>
                                
                             )
                        })
                    }
                </div>

            </section>
        </>
    );
};

export default Section;
