import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import Section from "../../components/Section";
import Footer from '../../components/Footer';

const Porcao = () =>{

 const [porcao, setPorcao] = useState([]);

    let porcoes = [ 
        {
            image: "src/assets/porcao/porcao-1.jpg",
            text: "Kibe"
        },
        {
            image: "src/assets/porcao/porcao-2.jpg",
            text: "Frango a passarinho"
        },
        {
            image: "src/assets/porcao/porcao-3.jpg",
            text: "Frios"
        },
        {
            image: "src/assets/porcao/porcao-4.jpg",
            text: "Salgadinhos"
        },
        {
            image: "src/assets/porcao/porcao-5.jpg",
            text: "Batata com bacon"
        },
        {
            image: "src/assets/porcao/porcao-6.jpg",
            text: "Mandioca frita"
        },
        {
            image: "src/assets/porcao/porcao-7.jpg",
            text: "Torresmo"
        },
        {
            image: "src/assets/porcao/porcao-8.jpg",
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