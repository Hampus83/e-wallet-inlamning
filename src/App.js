import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error';

function App() {

  const [cardnumber, setCardnumber] = useState();
  const [name, setName] = useState();
  const [valid, setValid] = useState();
  const [ccv, setCcv] = useState();
  const [color, setColor] = useState();
  const [text, setText] = useState();
  const [chip, setChip] = useState();
  const [logo, setLogo] = useState();

  const [cardObjects, setCardObjects] = useState([]);

  const navigate = useNavigate();
    
  function getCardData(event) {
    event.preventDefault();

    const cardObjectsCopy = [...cardObjects];
    cardObjectsCopy.push(newCard);
    setCardObjects(cardObjectsCopy);

    localStorage.setItem('cards', JSON.stringify(cardObjectsCopy));

    navigate('/');
}

useEffect(() => {
  const cardStackArray = JSON.parse(localStorage.getItem('cards'));

  if (cardStackArray) {
    setCardObjects(cardStackArray);
  }
}, []);

console.log(cardObjects);

const newCard = {
    number: cardnumber,
    cardName: name,
    validDate: valid,
    ccvNumber: ccv,
    color: color,
    text: text,
    chip: chip,
    logo: logo
}

  return (
    <div className="App">
      <section className="wrapper">
        <Routes>
          <Route path='/' element={ <Home cardObjects={ cardObjects } /> }/>
          <Route path='/addcard' element={ <AddCard setCardnumber={ setCardnumber } setName={ setName } setValid={ setValid } setCcv={ setCcv } getCardData={ getCardData } newCard={ newCard } setColor={ setColor } setText={ setText } setChip={ setChip } setLogo={ setLogo } /> }/>
          <Route path='*' element={ <Error />}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
