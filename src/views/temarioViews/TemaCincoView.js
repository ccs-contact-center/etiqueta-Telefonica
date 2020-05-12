import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Atencion from '../../assets/img/ImgEtiquetaTelefonica/atencion-a-clientes-tn.jpg'

class TemaDosView extends Component {
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
          <Row>
            <Col xs="12">
              <h2 className="animated jackInTheBox">
                <b>ESTRUCTURA DE LLAMADA:</b>
              </h2>
              <p className="centrado-fila animated jackInTheBox">Siempre ocupa durante tu llamada:</p>
            </Col>
          </Row>
          <Row className="centrado-fila mt-4">
            <Col xs="6" className="centrado-fila animated jackInTheBox delay-1s">
              <p className="text-center">
                <b className="text-danger">Actitud amable</b>
                <br />
                Sonreír cuando se tome la llamada que o se realice.
              </p>
            </Col>
            <Col xs="6"></Col>
          </Row>
          <Row className="centrado-fila ">
            <Col xs="6"></Col>
            <Col xs="6" className="centrado-fila animated jackInTheBox delay-2s">
              <p className="text-center">
                <b className="text-danger">Empatía</b>
                <br />
                Darse la oportunidad de entender las cosas desde el punto de
                vista del otro.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila ">
            <Col xs="6" className="centrado-fila animated jackInTheBox delay-3s">
              <p className="text-center">
                <b className="text-danger">Escucha activa</b>
                <br />
                Atender y analizar cada palabra del usuario para poder ofrecer
                la mejor alternativa.
              </p>
            </Col>
            <Col xs="6"></Col>
          </Row>
          <Row className="centrado-fila ">
            <Col xs="6"></Col>
            <Col xs="6" className="centrado-fila animated jackInTheBox delay-4s">
              <p className="text-center">
                <b className="text-danger">Asertividad</b>
                <br />
                Decir las cosas de manera adecuada, en el momento preciso, sin
                ser agresivo ni dócil.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila ">
            <Col xs="6" className="centrado-fila animated jackInTheBox delay-5s">
              <p className="text-center">
                <b className="text-danger">Paráfrasis</b>
                <br />
                Poner en propias palabras la idea del cliente.
              </p>
            </Col>
            <Col xs="6"></Col>
          </Row>
          <Row>
            <Col xs="12" className="centrado-fila">
              <img
                src={Atencion}
                style={{ width: 360 }}
                alt="atencion-a-clientes-tn"
                className="img-fluid bordeImagen  animated zoomInLeft delay-5s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
