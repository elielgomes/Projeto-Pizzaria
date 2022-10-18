import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const Drink = () =>{

 const [drink, setDrink] = useState([]);

    let drinks = [ 
        {
            image: "public/assets/drink/drink-1.jpg",
            text: "Gin"
        },
        {
            image: "public/assets/drink/drink-2.jpg",
            text: "Coquetel"
        },
        {
            image: "public/assets/drink/drink-3.jpg",
            text: "Caipirinha"
        },
        {
            image: "public/assets/drink/drink-4.jpg",
            text: "Água"
        },
        {
            image: "public/assets/drink/drink-5.jpg",
            text: "Refrigerante"
        },
        {
            image: "public/assets/drink/drink-6.jpg",
            text: "Suco"
        },
        {
            image: "public/assets/drink/drink-7.jpg",
            text: "vinho"
        },
        {
            image: "public/assets/drink/drink-8.jpg",
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