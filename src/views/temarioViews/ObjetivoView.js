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
        <CardBody className="text-center">
          <Row>
            <Col xs="12" className="centrado-fila">
              <Col xs="12" sm="12" md="7" lg="8">
                <div className="align-middle animated rubberBand delay-0s">
                  <ul>
                    <li>
                      El participante conocerá la importancia de los elementos
                      de la Etiqueta Telefónica, mismos que condicionarán el
                      éxito en el logro de nuestros objetivos al atender
                      llamadas para realizar una gestión exitosa, dar
                      seguimiento a pedidos o atender a nuestros socios.
                    </li>
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
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
