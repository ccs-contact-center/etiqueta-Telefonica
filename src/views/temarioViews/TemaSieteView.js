import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Video1 from '../../assets/img/ImgEtiquetaTelefonica/Gramatica.MP4'
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
              <h2>
                <b>HABILIDADES NECESARIAS</b>
              </h2>
              <p className="text-center">Evita:</p>
            </Col>
            <Col xs="12" sm="12" md="6" className="mt-4 mb-4">
              <div className="cajaA1">
                <ul style={{ marginBottom: '0px' }}>
                  <li>
                    <b className="text-danger">Errores gramaticales como:</b>
                  </li>
                </ul>
                <p>“Fuistes”, “Haiga”, “Bajastes”, ”Pos”, “vinistes” …etc.</p>

                <ul style={{ marginBottom: '0px' }}>
                  <li>
                    <b className="text-danger">Muletillas como:</b>
                  </li>
                </ul>
                <p>”Este"," aja”, “e”, “si”, “no”, “entonces”, …etc.</p>

                <ul style={{ marginBottom: '0px' }}>
                  <li>
                    <b className="text-danger">Caló-Argot:</b>
                  </li>
                </ul>
                <p>“Chido", "Chale”.</p>
                <ul style={{ marginBottom: '0px' }}>
                  <li>
                    <b className="text-danger">Anglicismos-extranjerismo:</b>
                  </li>
                </ul>
                <p>“OK”,“Bye” ,”Vale”,…etc.</p>
                <ul style={{ marginBottom: '0px' }}>
                  <li>
                    <b className="text-danger">Pleonasmos:</b>
                  </li>
                </ul>
                <p>“Salir afuera” “pagar el pago”.</p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" className="centrado-fila">
              <ReactPlayer width="100%" url={Video1} controls />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
