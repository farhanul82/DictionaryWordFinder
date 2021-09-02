import React from 'react'

import {
    Nav,
    Navbar,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-2 my-lg-0 nav" navbarScroll >
                        <NavLink
                            className="  navLink navLink1"
                            activeClassName="navbar__link--active"
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            activeClassName="navbar__link--active"
                            className=" navLink navLink2"
                            to="/favourites"
                        >
                            Favourites
                        </NavLink>

                        <div class="animation start-home"></div>
                    </Nav>


                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Headers
