import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './nav.styles.css'

const Nav = () => {
    return (
        <Fragment>
            <div className='nav-container'>
                <div>

                </div>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='#about' >
                        About
                    </Link>
                    <Link className="nav-link" to='#projects' >
                        Projects
                    </Link>
                    <Link className="nav-link" to='#contact' >
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Nav;