import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Naver.css'


const Naver = () => {
    return (
        <div>


        <Navbar expand="lg" className="nave">
        <Container>
            <Navbar.Brand href="#home">Dainamic Routing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-name">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/contrac">Contrac</NavLink>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    

        </div>
    );
};

export default Naver;