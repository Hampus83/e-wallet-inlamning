import './CardStack.css'

function CardStack(props) {

    const { cards } = props;

    return (
        <>
            <section className="card-stack">
                { cards }
            </section>
        </>
    );
}

export default CardStack;

