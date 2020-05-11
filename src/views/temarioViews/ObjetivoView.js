import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Objetivo from '../../assets/img/ImgEtiquetaTelefonica/objetivo.png'

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="5" lg="5">
              <div className="align-middle animated rubberBand delay-0s">
                <p>
                  En este curso te proporcionaremos las herramientas necesarias
                  para llevar a cabo tu llamada y logres el modelo de la
                  etiqueta telefónica al cubrir las necesidades de cada cliente
                  de tu campaña.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="5" lg="4">
              <img
                src={Objetivo}
                style={{ width: 360 }}
                alt="Objetivo"
                className="img-fluid bordeImagen animated rubberBand delay-1s"
              />
            </Col>
            <Col xs="12" sm="12" md="5" lg="4">
              <h3 className="animated rubberBand delay-2s">
                <b>¡COMENCEMOS!</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
