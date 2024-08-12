import {Link} from 'react-router-dom';

function Error() {
    return (

        <div className='error'>
            <p>Oops!</p>
            <h1>404</h1>
            <p>We can't find the page you're looking for.....</p>
            <Link className='error-btn' to='/'>Go back home</Link>
        </div>

    );
}


export default Error;