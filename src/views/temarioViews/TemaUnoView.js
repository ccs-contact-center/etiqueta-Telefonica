import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import actitudPositiva from '../../assets/img/ImgEtiquetaTelefonica/actitudPositiva.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Elementos de una etiqueta telefonica</h3>
        </CardHeader>
        <CardBody className="text-center">
          <Row>
            <Col xs="12">
              <img
                src={actitudPositiva}
                style={{ width: 360}}
                alt="actitudPositiva"
                className="img-fluid bordeImagen animated slideInUp "
              />
            </Col>
            <Col xs="12">
              <h1 className="animated slideInUp"><b>¡Actitud positiva!</b></h1>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
