import React, { Component } from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import Weather from './Weather';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       weather: null,
       cityList: [],
       newCityName: ''
    };
  }

  getCityList = () => {
    fetch('./server/api/cities')
    .then(res => res.json())
    .then(res => {
      var cityList = res.map(r => r.presupuesto_nconsejo);
      console.log("asu");
      this.setState({ cityList });
      console.log(cityList);
    });
    
  };
  
  handleInputChange = (e) => {
    this.setState({ newCityName: e.target.value });
  };

  handleAddCity = () => {
    console.log('entra a agregar');
    fetch('./api/cities', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city: this.state.newCityName })
    })
  
    .then(res => {
      res.json()
      console.log(res) 
    })
    .then(res => {
      this.getCityList();
      this.setState({ newCityName: '' });
    });
    console.log('termino de metodo agregar');
  };
//acanga
 getWeather = (pp) => {
    
    fetch(`/api/cities/${pp}`)
    .then(res => res.json())
    .then(weather => {
      console.log(weather);
      this.setState({ weather });
    });
    console.log('422');
  }

  handleChangeCity = (e) => {
    console.log(e)
    this.getWeather(e.target.value);
  }

  componentDidMount () {
    this.getCityList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">MyDashboardCellphone</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Cellphone</h1>
              <p className="lead">Read type cellphone!</p>
              <InputGroup>
                <Input 
                  placeholder="New..."
                  value={this.state.newCityName}
                  onChange={this.handleInputChange}
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={this.handleAddCity}>Add phone</Button>
                </InputGroupAddon>
                
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current cellphone</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeCity}>
                { this.state.cityList.length === 0 && <option>No cellphone added yet.</option> }
                { this.state.cityList.length > 0 && <option>Select a city.</option> }
                { this.state.cityList.map((pp, i) => <option key={i}>{pp}</option>) }
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Weather />
      </Container>
    );
  }
}

export default App;