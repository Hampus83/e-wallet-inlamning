import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    return (
        <section>
            <h1>This is not the page you're looking for</h1>
            <button className="button" onClick={ goBack }>back</button>
        </section>
    );
}

export default Error;