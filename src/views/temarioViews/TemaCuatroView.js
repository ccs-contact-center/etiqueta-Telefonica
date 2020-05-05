import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Escuchaactiva from '../../assets/img/ImgEtiquetaTelefonica/escucha-activa.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Importancia de la Etiqueta Telefónica</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 centrado-fila">
              <img
                src={Escuchaactiva}
                style={{ width: 300 }}
                alt="Escuchaactiva"
                className="img-fluid bordeImagen animated zoomInLeft delay-0s"
              />
            </Col>

            <Col xs="12" className="text-center">
              <br />
              <h1 className="animated zoomInLeft delay-1s">
                <b>LA ESCUCHA ACTIVA</b>
              </h1>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
