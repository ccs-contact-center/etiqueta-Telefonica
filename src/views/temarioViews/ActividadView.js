import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from 'reactstrap'

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Test de autoevaluación</h2>
            </CardHeader>
            <CardBody className="">
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio1" />
                        <Label check>
                          Manera "asertiva" de tratar al cliente.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio2" />
                        <Label check>Como hacer la llamada más ágil. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio3" />
                        <Label check>
                          La estructura de tratar una llamada.{' '}
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b> La imagen corporativa se trata de:</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          Crear un ambiente agradable para el usuario, dejando
                          una buena imagen de la empresa.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          Es recordar a cada momento de la llamada a la empresa
                          que se comunicó.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          Es hablarle al cliente de la empresa y decirle que se
                          comunicó al mejor lugar para atenderle.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3 "
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        Con base a tu conocimiento relaciona las filas con las
                        columnas. El tema es "Escucha Activa"
                      </b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <Table className="table-responsive">
                        <tr>
                          <td></td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>Emisor</Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>
                              <b>
                                {' '}
                                Escuchar y entender la comunicación desde el
                                punto de vista del que habla (cliente).
                              </b>
                            </Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>Canal</Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>Receptor</Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            {' '}
                            <Label check>Mensaje</Label>{' '}
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>Solución Problema</Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>Escucha del problema</Label>
                          </td>
                          <td class="align-middle" style={{paddingBottom:'0px'}}>
                            <Label check>
                              Entender la solución desde el punto de vista del
                              que habla (cliente). Comunicación telefónica.
                              Interferencias
                            </Label>
                          </td>
                        </tr>
                        <tr>
                          <td class="align-middle" style={{paddingTop:'0px'}}>Interferencias</td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            {' '}
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td style={{paddingTop:'0px'}}>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                        </tr>


                        {/* <p></p> */}
                        <tr>
                          <td>Comunicación telefónica.</td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            {' '}
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                        </tr>
                      </Table>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        Hablando de "Gestión de tiempos". ¿Cuánto es el tiempo
                        recomendado para retomar una llamada que se dejó en
                        "Hold"?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>De 30 a 45 segundos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>De 45 a 60 segundos. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>De 10 a 30 segundos.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b> ¿Cuáles son las actitudes empáticas?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>Escuchar, sondear, detectar.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          Interrumpir, quitarle la razón, imponer nuestro punto
                          de vista, ser insensible a las necesidades del
                          cliente.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          Escuchar, sondear, detectar, interrumpir, quitarle la
                          razón, imponer nuestro punto de vista, ser insensible
                          a las necesidades del cliente.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila" sm={{ size: 10 }}>
                    <Button color="primary">Enviar</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
