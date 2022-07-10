/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scroll > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={linkedin} alt="" /> </a>
                            <a href="#"><img src={twitter} alt="" /> </a>
                            <a href="#"><img src={instagram} alt="" /> </a>
                        </div>
                        {/* <button className="vvd" onClick={() => console.log('connect')}><span>Entre em contacto</span></button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
