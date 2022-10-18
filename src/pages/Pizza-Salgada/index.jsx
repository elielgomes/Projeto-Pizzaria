import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const PizzaSalgada = () =>{

 const [pizzaSalgada, setPizzaSalgada] = useState([]);

    let pizzasSalgadas = [ 
        {
            image: "/assets/pizza-salgada/pizza-salgada-1.jpg",
            text: "Frango com catupiry"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-2.jpg",
            text: "Carne e queijo"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-3.jpg",
            text: "Portuguesa"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-4.jpg",
            text: "Bacon"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-5.jpg",
            text: "Milho"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-6.jpg",
            text: "Napolitana"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-7.jpg",
            text: "Vegana"
        },
        {
            image: "/assets/pizza-salgada/pizza-salgada-8.jpg",
            text: "Mista"
        },
    ] 


    useEffect(()=>{
        setPizzaSalgada(pizzasSalgadas)
    },[])


    return(
        <>
            <Header/>
            <Section menu={pizzaSalgada}/>
            <Footer />
        </>
    );
};

export default PizzaSalgada;