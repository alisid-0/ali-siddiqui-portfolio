import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <Container className='py-3 text-light'>
            <Navbar>                 
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav.Link as={Link} to='/' className='text-light'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    <Nav.Link className='login-button'as={Link} to='/login'><Button>Login</Button></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}