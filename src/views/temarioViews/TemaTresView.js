import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'
import temaTresView from '../../assets/img/img-cursoQA/temaTresView.jpg'
import Modal1 from './componentsExtras/modales'
import {
  TablaATC,
  TablaVentas,
  TablasVentasOut,
} from './componentsExtras/tablas'
import Nota from './componentsExtras/notasReferencia'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
      
          <CardHeader className="text-left">
          <h3>Elementos de una etiqueta telefonica</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" className="centrado-fila">
                <img
                  src={temaTresView}
                  style={{ width: 360 }}
                  alt="temaTresView"
                  className="img-fluid bordeImagen"
                />
              </Col>
              <Col xs="12" className="text-justify">
               
              </Col>
              <Col xs="12" className="centrado-distribuido">
               
                
              </Col>
            
            </Row>
          </CardBody>
  
      </div>
    )
  }
}
export default TemaDosView
