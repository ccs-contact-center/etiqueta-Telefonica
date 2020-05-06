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
                    <legend className="col-form-label ">
                      ¿Qué es etiqueta telefónica?{' '}
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
                    <legend className="col-form-label ">
                      La imagen corporativa se trata de:{' '}
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
                  className="cajaA2 mt-3 text-center"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ">
                      Con base a tu conocimiento relaciona las filas con las
                      columnas. El tema es "Escucha Activa"{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <Table className="table-border ">
                        <tr>
                          <td>
                            <Label check>Emisor</Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>
                              Escuchar y entender la comunicación desde el punto
                              de vista del que habla (cliente).
                            </Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>Canal</Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>Receptor</Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            {' '}
                            <Label check>Mensaje</Label>{' '}
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>Solución Problema</Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>Escucha del problema</Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                          <td>
                            <Label check>
                              Entender la solución desde el punto de vista del
                              que habla (cliente). Comunicación telefónica.
                              Interferencias
                            </Label>
                            <FormGroup check>
                              <Input type="radio" name="radio2" />
                            </FormGroup>
                          </td>
                        </tr>
                      </Table>
                    </Col>
                  </FormGroup>
                </div>

                <FormGroup check row>
                  <Col sm={{ size: 10 }} className="centrado-fila">
                    <Button>Submit</Button>
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
