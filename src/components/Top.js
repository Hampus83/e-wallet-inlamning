import './Top.css'

function Top(props) {
    const { title, subTitle } = props;

    return (
        <section>
            <h1 className="title">{ title }</h1>
            <p className="sub-title">{ subTitle }</p>
        </section>
    );
}

export default Top;