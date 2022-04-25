import './Card.css';

function Card(props) {

    const { cardnumber, name, valid, color, text, chip, logo, makeActive } = props;

    return (
        <article className='card' id={ cardnumber } onClick={ makeActive } style={{ backgroundColor: color }}>
            <figure>
                <img className='chip' src={ chip } alt="" />
                <img className='vendor' src={ logo } alt="" /> 
            </figure>
            <h2 className='card-number' style={{ color: text }}>{ cardnumber }</h2>
            <section className="info-titles">
                <p className='card__cardholder-title sub-title' style={{ color: text }}>CARDHOLDER NAME</p>
                <p className='card__valid-title sub-title' style={{ color: text }}>VALID THRU</p>
            </section>
            <section className="info">
                <p className="cardholder-name" style={{ color: text }}>{ name }</p>
                <p className='validity' style={{ color: text }}>{ valid }</p>
            </section>
        </article>
    );
}

export default Card;

// ändra till cardObjects.* istället