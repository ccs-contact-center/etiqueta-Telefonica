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
          <h3> ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" className="text-center">
              <img
                src={actitudPositiva}
                style={{ width: 250}}
                alt="actitudPositiva"
                className="img-fluid bordeImagen animated slideInUp "
              />
            </Col>
            <Col xs="12 mt-3">
              <h1 className="animated slideInUp"><b>¿Qué es etiqueta telefónica?</b></h1>
              <h2 className="animated slideInUp">Manera “asertiva“ de tratar al cliente. </h2>
            </Col>
            <Col xs="12">
              <h1 className="animated slideInUp"><b>IMPORTANCIA DE LA ETIQUETA TELEFÓNICA </b></h1>
              <h2 className="animated slideInUp">La forma en que se contesta el teléfono dice mucho de la empresa y también de la persona.</h2>
            </Col>
            <Col xs="12">
              <h1 className="animated slideInUp"><b>ALGUNAS REGLAS</b></h1>
              <h2 className="animated slideInUp"><b> Imagen corporativa, Escucha activa, Gestión de silencios, Empatía, Resolución de problemas.</b></h2>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
