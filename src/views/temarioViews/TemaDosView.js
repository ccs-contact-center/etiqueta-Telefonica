import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader, TabContent } from 'reactstrap'
import icono from '../../assets/img/ImgEtiquetaTelefonica/icono.png'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Elementos de una etiqueta telefonica</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col md="1" sm="2" className="centrado-fila ">
              <img
                src={icono}
                style={{ width: 60 }}
                alt="icono.png"
                className="img-fluid  animated rollIn delay-0s"
              />
            </Col>
            <Col md="10" sm="10" className="">
              <p style={{ marginBottom: '0px' }} className="animated rotateInDownRight delay-0s">
                La actitud es la manera de actuar de una persona, es decir, el
                comportamiento que emplea un individuo para hacer las cosas.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col md="1" sm="2" className="centrado-fila">
              <img
                src={icono}
                style={{ width: 60 }}
                alt="icono.png"
                className="img-fluid  animated rollIn delay-1s"
              />
            </Col>
            <Col md="10" sm="10" className="">
              <p style={{ marginBottom: '0px' }} className="animated rotateInDownRight delay-1s">
                Concentración. El teléfono exige exclusividad y concentración.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col md="1" sm="2" className="centrado-fila">
              <img
                src={icono}
                style={{ width: 60 }}
                alt="icono.png"
                className="img-fluid  animated rollIn delay-2s"
              />
            </Col>
            <Col md="10" sm="10" className="">
              <p style={{ marginBottom: '0px' }} className="animated rotateInDownRight delay-2s">
                Relajación. Es conveniente inspirar profundamente antes de
                realizar responder una llamada.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col md="1" sm="2" className="centrado-fila">
              <img
                src={icono}
                style={{ width: 60 }}
                alt="icono.png"
                className="img-fluid  animated rollIn delay-3s"
              />
            </Col>
            <Col md="10" sm="10"  className="">
              <p style={{ marginBottom: '0px' }} className="animated rotateInDownRight delay-3s">
                Actitud mental. Carácter alegre y disfrutar del trabajo; ser
                capaz de poner al Cliente como centro de atención.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
