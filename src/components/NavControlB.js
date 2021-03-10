import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class NavControlB extends React.PureComponent {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Nav className="mr-auto">
                    <Link className="nav-link active s-lg" to='/'>Проверка ИНН</Link>
                    <Link className="nav-link" to='/about'>Помощь</Link>
                </Nav>
            </Navbar>
        );
    }
}