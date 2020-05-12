import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Flecha from '../../assets/img/ImgEtiquetaTelefonica/flecha.png'
import Video3 from '../../assets/img/ImgEtiquetaTelefonica/tonodevoz.MP4'
import ReactPlayer from 'react-player'

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
              <h2 className="animated zoomInUp">
                <b>HABILIDADES TÉCNICAS</b>
              </h2>
            </Col>
            <Col xs="12">
              <p className="animated zoomInUp delay-1s">
                <b> La importancia de la voz</b>
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4">
              <div className="cajaA1 bg-fondo-btn3 animated bounceInLeft delay-2s">
                <p style={{ marginBottom: '0px' }}>
                  Expresa y transmite pensamientos, emociones y sensaciones
                </p>
                <img
                  src={Flecha}
                  style={{ width: 60 }}
                  alt="icono.png"
                  className="img-fluid flecha "
                />
              </div>
            </Col>
            <Col xs="4">
              <div className="cajaA1 bg-fondo-btn3 animated bounceInLeft delay-3s">
                <p style={{ marginBottom: '0px' }}>
                  Transmite una imagen de empresa y profesionalidad
                </p>
                <img
                  src={Flecha}
                  style={{ width: 60 }}
                  alt="icono.png"
                  className="img-fluid flecha "
                />
              </div>
            </Col>
            <Col xs="4">
              <div className="cajaA1 bg-fondo-btn3 animated bounceInLeft delay-4s">
                <p style={{ marginBottom: '0px' }}>
                  Constituye nuestro medio de relación con el cliente.
                </p>
              </div>
            </Col>
            <Col xs="12" className="mt-3">
              <ReactPlayer className="animated zoomInUp delay-5s" width="90%" url={Video3} controls />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
