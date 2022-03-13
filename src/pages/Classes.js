import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';
import Header from '../components/ClassesComponents/Header';
import ClassInfo from '../components/ClassesComponents/ClassInfo';

import logo1 from '../images/IMG_1506.JPG';
import logo2 from '../images/IMG_1547.JPG';
import logo3 from '../images/IMG_1638.JPG';
import logo4 from '../images/IMG_1580.JPG';

class Classes extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <Header/>
      <ClassInfo imageside={0} image={logo1} title='VINYASA YOGA' description={['Vinyasa Yoga é uma prática fluída e dinâmica, baseada num conjunto sequencial de posturas, onde acompanhamos cada movimento com uma inspiração e uma expiração. A própria palavra "vinyasa" significa a sincronização da respiração com o movimento, o que nos leva a ter uma maior consciência corporal e atenção mental.', 'É uma aula para todos, para quem nunca praticou e para quem já tem muita experiência, sendo cada aula diferente, mas sempre com momentos divertidos, de meditação no início e de relaxamento no final.']} duration={"Duração 1h"} price={"Preço 10€"}/>
      <ClassInfo imageside={1} image={logo2} title='POWER VINYASA YOGA' description={['Para os que consideram o yoga uma prática demasiado relaxante e calma, esta aula vai fazê-los mudar de opinião!', 'Parecido com Vinyasa Yoga, o Power vai exigir mais de ti, vai desafiar-te e levar-te mais longe. É uma prática vigorosa, energética e poderosa, cuja respiração acompanha cada movimento e cada postura, ativando um calor interno que nos faz sentir verdadeiros guerreiros.']} duration={"Duração 1h"} price={"Preço 10€"}/>
      <ClassInfo imageside={0} image={logo3} title='YOGA PARA INICIANTES' description={['Uma prática de yoga para quem está a iniciar este caminho maravilhoso. Aulas leves com posturas fáceis de executar, onde o objetivo é ficar a conhecer e entender o yoga.', 'Trabalhamos não só a parte física, como também a mental e espiritual, onde o corpo, alma e mente se unem e tudo flui através da nossa prática. <br/> Se nunca fizeste yoga, ou não tens muita experiência, esta é uma ótima aula para começares a tua jornada!']} duration={"Duração 1h"} price={"Preço 10€"}/>
      <ClassInfo imageside={1} image={logo4} title='YOGA RESTAURATIVO' description={['Nos dias de hoje, cheios de emoção e stress, desaprendemos a descansar verdadeiramente. O Yoga Restaurativo vem trazer-nos essa pausa, esse restauro, essa conexão com nós mesmos que às vezes nos parece perdida.', 'São aulas de puro relaxamento, sem precisar de esforço algum, auxiliadas por mantas, almofadas e toalhas, para um conforto total.']} duration={"Duração 30min"} price={"Preço 5€"}/>
      <Footer />
    </>
  );
  }
  
}

export default Classes;