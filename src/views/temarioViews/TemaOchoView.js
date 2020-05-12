import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Video2 from '../../assets/img/ImgEtiquetaTelefonica/etiqueta.MP4'
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
            </Col>
            <Col xs="12" sm="12" md="6" className="mt-4 mb-4">
              <div className="cajaA1">
                <ul style={{ marginBottom: '0px' }}>
                  <li className="ulImg">
                    Mantener y trasmitir una
                    <b className="text-danger"> actitud de servicio </b>
                    cortés y profesional.
                  </li>
                  <li className="ulImg">
                    Reflejar actitud positiva y <b  className="text-danger">entusiasmo</b> durante la llamada.
                  </li>
                  <li className="ulImg">
                    Demostrar interés para <b  className="text-danger">solucionar</b> los requerimientos del
                    cliente.
                  </li>
                  <li className="ulImg">
                    Permitir al cliente <b  className="text-danger">expresar sus ideas</b> sin interrumpirlo.
                  </li>
                  <li className="ulImg">
                    Siempre ofrece <b  className="text-danger">ayuda adicional</b> al final de la llamada.
                  </li>
                </ul>
                <p className="text-center mt-4">
                  <b className="text-danger">
                    Utilizar frases / palabras de escucha activa. Ejemplo:
                    “Bien, le escucho…” ,”si le entiendo”…,” bien…”, etc.
                  </b>
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" className="centrado-fila">
              <ReactPlayer
                width="90%"
                url={Video2}
                controls
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
