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
} from 'reactstrap'
import SweetAlert from 'sweetalert2-react'
//import { bind } from 'core-js/fn/function'
import AuthService from "../../services/AuthService";
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService();
    this.state = {
      acierto1: '',
      acierto2: '',
      acierto3: '',
      acierto4: '',
      acierto5: '',
      acierto6: '',
      acierto7: '',
      acierto8: '',
      acierto9: '',
      acierto10: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "etiquetaTelefonica-2",
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo actividad: 2, con id ' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  // validate(e) {
  //   if (this.state.value !== true) {
  //     this.setState({
  //       message: 'Falta campos por llenar',

  //     })
  //   }

  // }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <SweetAlert
          show={this.state.show}
          title="Enviado"
          text="Respuestas enviadas...."
          onConfirm={() => this.setState({ show: false })}
        />
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                Es hora de saber qué has aprendido de este curso. Elige la
                opción de acuerdo a cada pregunta.{' '}
              </p>
              <Form onSubmit={this.handleSubmit}>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1. ¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto1"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />

                        <Label check>(a) Es la estructura de la llamada.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto1"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(b) Es la etiqueta telefónica. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto1"
                          required
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Es la manera de contestar el teléfono.
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
                      <b>2. ¿Por qué es importante dentro de tus funciones?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto2"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (a) Puede ser la diferencia entre un cliente
                          satisfecho y uno que decida buscar a la competencia.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto2"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (b) Se tendrá un mejor control de llamada y siempre
                          nos llamará.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto2"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Nos ayudará a tener en ocasiones homologado el
                          servicio al cliente.
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
                      <b>3. ¿En qué partes de divide una llamada?</b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) Inicio, Desarrollo, Cierre.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(b) Desarrollo, Inicio, Cierre. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(c) Inicio, Cierre, Inicio.</Label>
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
                      <b> 4. ¿Qué debes hacer al personalizar en tu llamada?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto4"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (a) Mencionar el nombre del cliente por lo menos 3
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto4"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (b) Mencionar el nombre del cliente por lo menos 2
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto4"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Mencionar el nombre del cliente por lo menos 4
                          veces durante la llamada.
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
                      <b>
                        {' '}
                        5. “Fuistes”, “Haiga”, “Bajastes”, ”Pos”, “vinistes” son
                        ejemplos de:
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto5"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(a) Gramaticales.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto5"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(b) Muletillas.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto5"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(c) Pleonasmos.</Label>
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
                      <b>
                        {' '}
                        6. ¿A qué nos referimos cuando te pedimos que empatices
                        con el cliente?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto6"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (a) Colocarse en el lugar del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto6"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (b) Resolver como de lugar el problema del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto6"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Es utilizar frases de cortesía con el cliente .
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
                      <b>7. Son algunas frases de escucha activa.</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto7"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(a) Por Favor, Gracias.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto7"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(b) De acuerdo, Entiendo.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto7"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Me podría indicar, Me puede proporcionar por
                          favor.
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
                      <b>8. ¿Por qué es importante la voz en tu trabajo?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto8"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (a) Permite transmitir pensamientos, emociones y
                          sensaciones.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto8"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (b) Permite realizar el trabajo en menos tiempo.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto8"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Así el cliente entiendo lo que le estamos
                          solicitando.
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
                      <b>9. ¿Qué es la escucha activa?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto9"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (a) Atender y analizar cada palabra del usuario para
                          poder ofrecer la mejor alternativa.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto9"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (b) Poner en propias palabras la idea del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto9"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>
                          (c) Sonreír cuando se tome la llamada.
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
                      <b>
                        10. Su definición es: Decir las cosas de manera
                        adecuada, en el momento preciso, sin ser agresivo ni
                        dócil.
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto10"
                          value="a"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(a) Asertividad.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto10"
                          value="b"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(b) Escucha activa.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="acierto10"
                          value="c"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                        <Label check>(c) Empatía.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      id="guardar"
                      name="guardar"
                      color="primary"
                      onClick={this.onSave.bind(this)}
                    >
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              {/* <div>
                <p>{JSON.stringify(this.state)}</p>
              </div> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
