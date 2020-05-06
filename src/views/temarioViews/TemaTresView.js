import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'
import esquema01 from '../../assets/img/ImgEtiquetaTelefonica/esquema-01.png'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Escucha activa</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" className="">
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-1s"
              >
                <b>Comunicación telefónica.</b>
              </p>
              
               <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-1s"
              >
                Escuchar y entender la comunicación desde el punto de vista del que habla (cliente).

              </p>
              <br/>
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-2s"
              >
                <b>Interferencias.</b>
              </p>
            </Col>
            
            <Col xs="12" className="centrado-fila">
              <img
                src={esquema01}
                style={{ width: 350 }}
                alt="esquema-01.png"
                className="img-fluid animated bounceInRight delay-3s "
              />
            </Col>
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
