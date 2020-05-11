import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2>
                <b>ESTRUCTURA DE LLAMADA:</b>
              </h2>
              <p>
                Será esta estructura nuestra guía para darle un orden a nuestras
                llamadas.
              </p>
            </Col>
            <Col xs="12" className=" centrado-fila">
              <div className="cajaA1 bg-fondo-btn3">
                <p style={{ marginBottom: '0px' }} className="text-center">
                  <b> &nbsp; &nbsp; Inicio &nbsp; &nbsp; </b>
                </p>
              </div>

              <div className="cajaA2 bg-fondo-btn">
                <ul style={{ marginBottom: '0px', paddingLeft: '20px' }}>
                  <span> &nbsp;</span>
                  <li>Saludo</li>
                  <li>Presentación</li>
                  <span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                </ul>
              </div>
            </Col>
            <Col xs="12" className=" centrado-fila mt-3">
              <div className="cajaA1 bg-fondo-btn3">
                <p style={{ marginBottom: '0px' }} className="text-center">
                  <b>Desarrollo</b>
                </p>
              </div>

              <div className="cajaA2 bg-fondo-btn">
                <ul style={{ marginBottom: '0px', paddingLeft: '20px' }}>
                  <li>Presentación de producto.</li>
                  <li>Preguntas (detección de necesidades).</li>
                  <li>Dudas e in quietudes.</li>
                  <li>Resolución.</li>
                  <li>Cierre de venta o solución de problema.</li>
                  <li>
                    Vencimiento de objeciones o replantiamiento de problema.
                  </li>
                  <li>Cierre.</li>
                </ul>
              </div>
            </Col>
            <Col xs="12" className=" centrado-fila mt-3">
              <div className="cajaA1 bg-fondo-btn3">
                <p style={{ marginBottom: '0px' }} className="text-center">
                  <b>&nbsp; &nbsp; Cierre &nbsp; &nbsp; </b>
                </p>
              </div>

              <div className="cajaA2 bg-fondo-btn">
                <ul style={{ marginBottom: '0px', paddingLeft: '20px' }}>
                <span> &nbsp;</span>
                  <li>Ayuda adicional.</li>
                  <li>Despedida.</li>
                  <span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                </ul>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
