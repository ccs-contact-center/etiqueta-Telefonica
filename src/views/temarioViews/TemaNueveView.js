import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Tabla1 from './componentsExtras/tablas'


class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated flipInX">
                <b>HABILIDADES NECESARIAS</b>
              </h2>
            </Col>
            <Col xs="12" className="animated jackInTheBox delay-1s">
              <p>
                Algunas frases que puedes ocupar para empatizar y conectar con
                el cliente pueden ser:
              </p>
              <Tabla1/>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
