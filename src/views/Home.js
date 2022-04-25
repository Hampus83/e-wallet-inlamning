import './Home.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from '../components/CardStack';

function Home(props) {

    const { cardObjects } = props;

    const navigate = useNavigate();

    function goToAddCard() {
        navigate('/addcard');
    }

    const [activeCard, setActiveCard] = useState(0);

    function makeActive(event) {
        const activeIndex = cardObjects.findIndex(card => card.number === event.target.id);
        setActiveCard(activeIndex);
        console.log(activeIndex);
    }

    function deleteActiveCard() {
        cardObjects.splice(activeCard, 1);
        localStorage.setItem('cards', JSON.stringify(cardObjects));
        JSON.parse(localStorage.getItem('cards'));
        setActiveCard(0);
        navigate('/');
    }

    const cards = cardObjects.map((card, index) => {
        return <Card makeActive={ makeActive } cardnumber={ card.number } name={ card.cardName } valid={ card.validDate } logo={ card.logo } chip={ card.chip } color={ card.color } text={ card.text } key={ index } />
    });
    
    return (
        <>
            <Top title={ 'E-WALLET' } subTitle={ 'ACTIVE CARD' }/>
             { cardObjects.length > 0 && <Card cardnumber={ cardObjects[activeCard].number } name={ cardObjects[activeCard].cardName } valid={ cardObjects[activeCard].validDate } color={ cardObjects[activeCard].color } text={ cardObjects[activeCard].text } chip={ cardObjects[activeCard].chip } logo={ cardObjects[activeCard].logo } /> }
             <button className='delete' onClick={ deleteActiveCard }>DELETE ACTIVE CARD</button>
            <CardStack cards={ cards } />
            <button className="add-new-card" onClick={ goToAddCard }>ADD A NEW CARD</button>
        </>
    );
}

export default Home;