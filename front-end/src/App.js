import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBarBootStrap from '././components/NavBarBootStrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowProgress from './components/myProgress/showProgress';
import HomePage from './components/homePage/HomePage';
import ConnectUs from './components/connectUs/ConnectUs';
import UserStatistics from './components/myProgress/userStatistics';
import SignIn from './components/user/SignIn';
import Cups_and_points from './components/admin/CupsAndPoints';
import Demo from './components/Demo';
import FeedbackText from './components/admin/FeedbackText';
import AdminReport from './components/admin/AdminReport';



function App() {
  return (
    <Router>
      <Container >
        <Row>
          <Col><NavBarBootStrap ></NavBarBootStrap></Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/show_progress" component={ShowProgress} />
              <Route path="/user_statistics" component={UserStatistics} />
              <Route path="/admin/cups_and_points" component={Cups_and_points} />
              <Route path="/admin/feedback_text" component={FeedbackText} />
              <Route path="/admin/users_statistics" component={AdminReport} />
              <Route path="/sign_in" component={SignIn} />
              <Route path="/connect_us" component={ConnectUs} />
              <Route path="/demo" component={Demo} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
    /*<div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
