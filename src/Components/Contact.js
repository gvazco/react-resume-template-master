import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Estamos a tu alcance</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <form id="formulariowtsp" action="" class="formulariowtsp">
              <fieldset>
                <a
                  style={{ display: "none" }}
                  href="https://api.whatsapp.com/send?phone=5215581853675&text=hola%20gustavo"
                >
                  Envia un mensaje via WhatsApp
                </a>
                <div>
                  <label htmlFor="contactName">
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    name="subject"
                    id="subject"
                    cols="10"
                    rows="10"
                    placeholder="Ingresa tu mensaje aquí..."
                  ></textarea>
                </div>

                <div>
                  <button type="submit" id="sendbttn" class="btnwtsp">
                    <i class="fab fa-whatsapp" id="icon-wts"></i> ENVIAR
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
