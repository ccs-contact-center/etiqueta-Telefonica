import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Example from './componentsExtras/tablas'
import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>FRASES ETIQUETA TELEFÓNICA </h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 centrado-fila">
              <div
                style={{ width: '60%' }}
                className="animated bounceInRight delay-3s"
              >
                <Example />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
