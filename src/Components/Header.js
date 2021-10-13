import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var logotipo = "images/" + this.props.data.logotipo;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
    }

    return (
      <header id="home">
        {/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Mostrar
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Ocultar
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Contacto
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </nav> */}

        <div className="row banner">
          <div className="banner-text">
            <img className="logotipo" src={logotipo} alt="HRV-Logotipo" />
            <h3>
              <span>{occupation}</span> y {description}.
            </h3>
            <hr />
            {/* <ul className="social">{networks}</ul> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
