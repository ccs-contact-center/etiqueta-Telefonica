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
          <h3>Lineamientos generales de la Metodología</h3>
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
              <ul className="animated lightSpeedIn delay-1s">
                <li>Un tono amistoso y cordial</li>
                <li>Estar predispuesto a la ayuda</li>
                <li>Una actitud de apertura mental y respeto</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
