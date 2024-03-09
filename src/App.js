import logo from './logo.svg';
import './App.css';
import Header from './componantes/Header';
import Mainsection from './componantes/Mainsection';
import Card from './componantes/Card';
import katie from './images/Katie-Zaferes.png'
import leeknow from './images/leeknow.png'
function App() {
  return (
    <div className="App">     
      <Header/>
      <Mainsection/>
      <div className='essai'>
         <Card
           img= {katie}
           rate='4'
           act=' Katie Zoferes'
           price='50'
         />
         <Card
           img= {leeknow}
           rate='5'
           act=' Lee Know'
           price='100'

         />
      </div>
      
    </div>
  );
}

export default App;
