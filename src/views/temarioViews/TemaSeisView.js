import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import servicio from '../../assets/img/ImgEtiquetaTelefonica/servicio.png'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>EMPATÍA</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="6" sm="5" md="5" className="centrado-fila">
              <img
                src={servicio}
                style={{ width: 360 }}
                alt="servicio"
                className="img-fluid bordeImagen animated lightSpeedIn delay-0s"
              />
            </Col>
            <Col xs="6" sm="5" md="5">
              <p><b> Actitudes Empáticas:</b> Escuchar, sondear, detectar.</p>
              <p><b>Actitudes No Empáticas:</b> interrumpir, quitarle la razón, imponer nuestro punto de vista, ser insensible a las necesidades del cliente. </p>
              <p><b></b></p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
