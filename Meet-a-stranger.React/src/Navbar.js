import React from 'react';
import logo from './logo-navbar.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border rounded py-0 fixed-top">
  <a href="#">
    <img src={logo} height="75" className="d-inline-block align-top py-1" alt=""></img>   
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    {/* <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-secondary mb-0" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul> */}
    <ul class="navbar-nav ml-auto pr-5">
    <li className="nav-item active px-2">
        <a className="nav-link text-secondary mb-0" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown px-2">
        <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Friends
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        </div>
      </li>
      <li className="nav-item p-2 d-flex justify-content-center align-items-center">
        <a href="#"><i class="fa fa-bell mx-auto text-secondary"></i></a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
