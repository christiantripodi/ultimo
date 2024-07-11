import { Navbar, Container, Nav } from "react-bootstrap"
import {Link} from 'react-router-dom'

const CustomNavbar = () => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="../public/x.png " alt="logo" style={{width:"300px"}} />
                    
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar