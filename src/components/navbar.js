 import React, { Component } from 'react'
 import {a} from 'react-router-dom'
 
 export class navbar extends Component {
 
   render() {
     return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Pratham' News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex justify-content-end"> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item"> <a className="btn btn-light"    href="/">Home  </a></li>
            
              <li className="nav-item"> <a className="btn btn-light"  href="/business">Business    </a></li>  
              <li className="nav-item"> <a className="btn btn-light"  href="/entertainment">Entertainment</a></li> 
              <li className="nav-item"> <a className="btn btn-light"  href="/general">General</a></li>
              <li className="nav-item"> <a className="btn btn-light"  href="/health"> Health </a></li>
              <li className="nav-item"> <a className="btn btn-light"  href="/science"> Science</a></li>
              <li className="nav-item"> <a className="btn btn-light"  href="/technology">Technology</a></li>
              <li className="nav-item"> <a className="btn btn-light"  href="/Anime">Anime</a></li> 
              <li className="nav-item"> <a className="btn btn-light"  href="/Sports">Sports</a></li> 
              <li className="nav-item dropdown">
                <a className="btn btn-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
     )
   }
 }
 
 export default navbar
 