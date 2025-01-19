import React from 'react'
import brandLogo from '../android-chrome-512x512.png'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info fw-bold fixed-top">
                <div className="container-fluid">

                    <a class="navbar-brand" href="/">
                        <img src={brandLogo} alt="Logo" width="38" height="30" class="d-inline-block align-text-top mx-2" />
                        Flipkart
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-medium" aria-current="page" href='/'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-medium" href='/'>Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium active" href='/' >Contact</a>
                            </li>
                        </ul>
                        <button class="btn btn-warning " >Your Balance : 5000</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
