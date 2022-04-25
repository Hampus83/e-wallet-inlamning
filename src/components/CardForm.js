import './CardForm.css';

import vendorBitcoin from '../assets/vendor-bitcoin.svg';
import vendorNinjabank from '../assets/vendor-ninja.svg';
import vendorBlockchain from '../assets/vendor-blockchain.svg';
import vendorEvilcorp from '../assets/vendor-evil.svg';

import chipLight from '../assets/chip-light.svg';
import chipDark from '../assets/chip-dark.svg';

import { useEffect } from 'react';

function CardForm(props) {
    const { setCardnumber, setName, setValid, setCcv, getCardData, setColor, setText, setChip, setLogo, newCard } = props;

    function getVendor(event) {
        setLogo(event.target.value);
    }

    function getCardnumber(event) {
        setCardnumber(event.target.value);
    }

    function getName(event) {
        setName(event.target.value);
    }

    function getValid(event) {
        setValid(event.target.value);
    }

    function getCcv(event) {
        setCcv(event.target.value);
    }

    useEffect(() => {
        if (newCard.logo === 'block chain inc') {
            setLogo(vendorBlockchain);
            setColor('#8b58f9');
            setText('#ffffff');
            setChip(chipLight);
          } else if (newCard.logo === 'bitcoin inc') {
              setLogo(vendorBitcoin);
              setColor('#ffae34');
              setText('#000000');
              setChip(chipDark);
          } else if (newCard.logo === 'ninja bank') {
              setLogo(vendorNinjabank);
              setColor('#222222');
              setText('#ffffff');
              setChip(chipLight);
          } else if (newCard.logo === 'evil corp') {
              setLogo(vendorEvilcorp);
              setColor('#f33355');
              setText('#ffffff');
              setChip(chipLight);
            }
    }, [newCard.logo]);

    return (
        <form className="form">
            <p className="cardform__cardnumber sub-title">CARD NUMBER (PLZ USE SPACE AFTER EVERY 4TH NUMBER)</p>
            <input type="text" className="input cardnumber-input" onKeyUp={ getCardnumber }/>
            <p className="cardform__name sub-title">CARDHOLDER NAME</p>
            <input type="text" className="input cardname-input" onKeyUp={ getName }/>
            <section>
                <article>
                    <p className="sub-title cardform__valid">VALID THRU</p>
                    <input type="text" className="input valid-input" onKeyUp={ getValid } />
                </article>
                <article>
                    <p className="sub-title cardform__ccv">CCV</p>
                    <input type="text" className="input ccv-input" onKeyUp={ getCcv }/>
                </article>
            </section>
            <p className="sub-title cardform__vendor">VENDOR</p>
            <select className="input vendors-input" onClick={ getVendor }>
                <option value="bitcoin inc">BITCOIN INC</option>
                <option value="ninja bank">NINJA BANK</option>
                <option value="block chain inc">BLOCK CHAIN INC</option>
                <option value="evil corp">EVIL CORP</option>
            </select>
            <button className='button add-card' onClick={ getCardData }>ADD CARD</button>
        </form>
    );
}

export default CardForm;