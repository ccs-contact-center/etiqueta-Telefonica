import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'
import icono from '../../assets/img/ImgEtiquetaTelefonica/icono.png'

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
          <Row className="centrado-fila">
            <Col md="12" className="">
              <h2
                style={{ marginBottom: '0px' }}
                className="text-center mb-3 animated bounceInRight delay-0s "
              >
                <b>¿Porqué es importante la Etiqueta Telefónica?</b>
              </h2>
            </Col>
            
            <Col md="9" sm="8" className="">
              <p
                style={{ marginBottom: '0px' }}
                className="text-justify animated bounceInRight delay-1s"
              >
                Porque esto creará un servicio de atención al cliente homogéneo
                sin importar el día y la hora en la que se comunique el cliente.
                Tener una buena etiqueta telefónica puede ser la diferencia
                entre un cliente satisfecho y uno que decida buscar a la
                competencia.
              </p>
            </Col>
            <Col md="3" sm="4" className="centrado-fila ">
              <img
                src={icono}
                style={{ width: 260 }}
                alt="icono.png"
                className="img-fluid animated bounceInRight delay-2s "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
