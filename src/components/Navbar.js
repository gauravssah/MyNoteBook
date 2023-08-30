import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }




    let location = useLocation();
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <strong>MyNotes</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li> */}

                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-light btn-sm fw-bold text-dark" to='/login' role='button'>Login</Link>
                            <Link className="btn btn-light btn-sm fw-bold mx-2 text-dark" to='/signup' role='button'>Signup</Link>
                        </form> :
                            // Prpfile ------

                            <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                                <a
                                    className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    <i className="fas fa-user mx-1"></i> Profile
                                </a>

                                <ul
                                    className="dropdown-menu dropdown-menu-lg-end dropdown-menu-start text-center"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" to="/">
                                            My account
                                        </a>
                                    </li>

                                    <li>
                                        <button onClick={handleLogout} className="btn btn-light btn-sm fw-bold text-dark">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>


                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

