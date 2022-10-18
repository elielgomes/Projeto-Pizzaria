import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const Porcao = () =>{

 const [porcao, setPorcao] = useState([]);

    let porcoes = [ 
        {
            image: "/public/assets/porcao/porcao-1.jpg",
            text: "Kibe"
        },
        {
            image: "/public/assets/porcao/porcao-2.jpg",
            text: "Frango a passarinho"
        },
        {
            image: "/public/assets/porcao/porcao-3.jpg",
            text: "Frios"
        },
        {
            image: "/public/assets/porcao/porcao-4.jpg",
            text: "Salgadinhos"
        },
        {
            image: "/public/assets/porcao/porcao-5.jpg",
            text: "Batata com bacon"
        },
        {
            image: "/public/assets/porcao/porcao-6.jpg",
            text: "Mandioca frita"
        },
        {
            image: "/public/assets/porcao/porcao-7.jpg",
            text: "Torresmo"
        },
        {
            image: "/public/assets/porcao/porcao-8.jpg",
            text: "Peixe frito"
        },
    ] 

    useEffect(()=>{
        setPorcao(porcoes)
    },[])


    return(
        <>
            <Header/>
            <Section menu={porcao}/>
            <Footer />
        </>
    );
};

export default Porcao;