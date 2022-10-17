import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const Drink = () =>{

 const [drink, setDrink] = useState([]);

    let drinks = [ 
        {
            image: "src/assets/drink/drink-1.jpg",
            text: "Gin"
        },
        {
            image: "src/assets/drink/drink-2.jpg",
            text: "Coquetel"
        },
        {
            image: "src/assets/drink/drink-3.jpg",
            text: "Caipirinha"
        },
        {
            image: "src/assets/drink/drink-4.jpg",
            text: "Água"
        },
        {
            image: "src/assets/drink/drink-5.jpg",
            text: "Refrigerante"
        },
        {
            image: "src/assets/drink/drink-6.jpg",
            text: "Suco"
        },
        {
            image: "src/assets/drink/drink-7.jpg",
            text: "vinho"
        },
        {
            image: "src/assets/drink/drink-8.jpg",
            text: "Chopp"
        },
    ] 


    useEffect(()=>{
        setDrink(drinks)
    },[])


    return(
        <>
            <Header/>
            <Section menu={drink}/>
            <Footer />
        </>
    );
};

export default Drink;