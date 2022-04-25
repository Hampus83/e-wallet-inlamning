import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

import chipDark from '../assets/chip-dark.svg';
import vendorBitcoin from '../assets/vendor-bitcoin.svg';

function AddCard(props) { 
    const { setCardnumber, setName, setValid, setCcv, setColor, setText, setChip, getCardData, newCard, setLogo } = props;

    return (
        <>
            <Top title={ 'ADD A NEW BANK-CARD' } subTitle={ 'NEW CARD' }/>
            <Card cardnumber={ 'XXXX XXXX XXXX XXXX' } name={ 'FIRSTNAME LASTNAME' } valid={ 'MM/YY' } color={ '#d0d0d0' } chip={ chipDark } logo={ vendorBitcoin } />
            <CardForm setCardnumber={ setCardnumber } setName={ setName } setValid={ setValid } setCcv={ setCcv } getCardData={ getCardData } newCard={ newCard } setLogo={ setLogo } setColor={ setColor } setText={ setText } setChip={ setChip } />
        </>
    );
}

export default AddCard;

