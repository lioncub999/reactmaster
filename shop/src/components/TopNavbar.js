import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function TopNavbar() {
    let navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">SHOP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={function() {
                        navigate('/')
                    }}>Home</Nav.Link>
                    <Nav.Link onClick={function() {
                        navigate('/about')
                    }}>어바웃</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default TopNavbar