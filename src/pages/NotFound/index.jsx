import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';


const NotFound = () =>{
    return(
        <>
         <Header />

            <div id="container-notfound">
<div id="container-image">
    
                    <img id="image-404" src="/assets/not-found/404.png" alt="Erro 404" />
</div>

                <h1 id="text-notfound">
                    Page Not Found!
                </h1>

            </div>



         <Footer />
        </>
    );
}; 

export default NotFound;