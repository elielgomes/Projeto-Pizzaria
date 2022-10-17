import React, {useState, useEffect} from 'react'
import Header from '../../components/Header';
import Main from '../../components/Main';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

function Home() {

  const [cardMenu, setCardMenu] = useState([]);

    let menu = [ 
        {
            image: "src/assets/pizza-salgada/pizza-salgada-7.jpg",
            text: "Pizza salgada",
            url: "/pizzas-salgadas"
        },
        {
            image: "src/assets/pizza-doce/pizza-doce-1.jpg",
            text: "Pizza doce",
            url: "/pizzas-doces"
        },
        {
            image: "src/assets/porcao/porcao-3.jpg",
            text: "Porções",
            url: "/porcoes"

        },
        {
            image: "src/assets/drink/drink-2.jpg",
            text: "Drinks",
            url: "/drinks"

        },
    ] 

    useEffect(()=>{

        setCardMenu(menu)
        
    },[]);

  return (
    <>
      <Header />
      <Main />
      <Section menu={cardMenu} />
      <Footer />
    </>
  )
}

export default Home;
