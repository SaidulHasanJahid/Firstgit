import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import'./Footer.css';

const Footer = () => {
    return (
        <footer>
            <h1>Shope Dhaka</h1>
            <ul className='one'>
               <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contrac">Contrac</Link></li>
                <li><Link to="shop">Shope</Link></li>
            </ul>
            <ul className='one'>
               <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contrac">Contrac</Link></li>
                <li><Link to="shop">Shope</Link></li>
            </ul>
            <ul className='one'>
               <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contrac">Contrac</Link></li>
                <li><Link to="shop">Shope</Link></li>
            </ul>
            <ul className='one'>
                <h2>Plice Sign In</h2>
            <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            </ul>
        </footer>
    );
};

export default Footer;