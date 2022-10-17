import React, {useState, useEffect} from "react";
import "swiper/css/bundle";
import Carousel from "../Carousel";
import './style.css';


const Main = () => {

    return (
        <>
            <main>
                <div id="container-banners">
                    <Carousel/>
                </div>

                <div id="ribbon-menu">
                    <h1 id="text-menu">
                      Menu
                    </h1>
              </div>
            </main>
        </>
    );
};

export default Main;