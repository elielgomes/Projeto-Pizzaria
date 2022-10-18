import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Section = (props) => {
  return (
    <>
      <section>
        <div id="container-cards">
          {props.menu.map((card) => {
            return (
              <Link to={card.url}>
                <div className="card" key={card.text}>
                  <div className="container-image-card">
                    <span class="loader"></span>

                    <img src={card.image} alt={card.text} />
                  </div>
                  <p className="text-card">{card.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Section;
