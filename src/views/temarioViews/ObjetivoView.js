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
          <h3>Resolucón de Problemas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
      
              <Col xs="12" sm="12" md="5" lg="5">
                <div className="align-middle animated rubberBand delay-0s">
                  <p>
                    <b>Objetivos</b>
                  </p>
                  <ul>
                    <li>Tiempos de conversación.</li>
                    <li>Resolución de incidencias.</li>
                    <li>Cliente satisfecho.</li>
                  </ul>
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
            
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
