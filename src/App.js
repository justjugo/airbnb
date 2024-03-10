import logo from './logo.svg';
import './App.css';
import Header from './componantes/Header';
import Mainsection from './componantes/Mainsection';
import Card from './componantes/Card';
import leeknow from './images/leeknow.png'
import katie from './images/Katie-Zaferes.png'
import data from './data';

function App() {
  const element =data.map(card=> {
    return <Card
                img={card.img} 
                rate={card.rate}
                act={card.card}
                price={card.price}
                country={card.country}
                reviewcount={card.reviewcount}
    
           />
  })
  return (
    <div className="App">  
       
      <Header/>
      <Mainsection/>
      <div className='essai'>
        {element}  
      </div>
      
    </div>
  );
}

export default App;
