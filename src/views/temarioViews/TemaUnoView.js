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
              <p className="animated slideInUp" style={{marginBottom:'0px'}}><b>¿Qué es etiqueta telefónica?</b></p>
              <p className="animated slideInUp">Manera “asertiva“ de tratar al cliente. </p>
            </Col>
            <Col xs="12">
              <p className="animated slideInUp" style={{marginBottom:'0px'}}><b>IMPORTANCIA DE LA ETIQUETA TELEFÓNICA </b></p>
              <p className="animated slideInUp">La forma en que se contesta el teléfono dice mucho de la empresa y también de la persona.</p>
            </Col>
            <Col xs="12">
              <p className="animated slideInUp" style={{marginBottom:'0px'}}><b>ALGUNAS REGLAS:</b> Imagen corporativa, Escucha activa, Gestión de silencios, Empatía, Resolución de problemas.</p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
