import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'
import elemetos from '../../assets/img/ImgEtiquetaTelefonica/elemetos.png'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Importancia de la Etiqueta Telefónica</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" className="centrado-fila">
              <img
                src={elemetos}
                style={{ width: 250 }}
                alt="elemetos"
                className="img-fluid animated bounceInRight delay-0s "
              />
            </Col>
            <Col xs="12" className="centrado-fila mb-2">
              <div
                className="cajaA1 animated bounceInRight delay-1s"
                style={{ width: '250px' }}
              >
                <p className="text-center" style={{ marginBottom: '0px' }}>
                  <b>ENTONACIÓN</b>
                </p>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila mb-2">
              <div
                className="cajaA1 animated bounceInRight delay-2s"
                style={{ width: '250px' }}
              >
                <p className="text-center" style={{ marginBottom: '0px' }}>
                  <b>ARTICULACIÓN</b>
                </p>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila">
              <div
                className="cajaA1 animated bounceInRight delay-3s"
                style={{ width: '250px' }}
              >
                <p className="text-center" style={{ marginBottom: '0px' }}>
                  <b>LOCUCIÓN O RITMO</b>{' '}
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
