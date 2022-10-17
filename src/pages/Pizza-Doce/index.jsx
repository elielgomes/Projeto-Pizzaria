import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const PizzaDoce = () =>{

 const [pizzaDoce, setPizzaDoce] = useState([]);

    let pizzasDoces = [ 
        {
            image: "src/assets/pizza-doce/pizza-doce-1.jpg",
            text: "Brigadeiro"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-2.jpg",
            text: "Banana com canela"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-3.jpg",
            text: "Prestígio"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-4.jpg",
            text: "Chocolate"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-5.jpg",
            text: "Confete"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-6.jpg",
            text: "Doce de leite"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-7.jpg",
            text: "Romeu e julieta"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-8.jpg",
            text: "Casadinho"
        },
    ] 


    useEffect(()=>{
        setPizzaDoce(pizzasDoces)
    },[])


    return(
        <>
            <Header/>
            <Section menu={pizzaDoce}/>
            <Footer />
        </>
    );
};

export default PizzaDoce;