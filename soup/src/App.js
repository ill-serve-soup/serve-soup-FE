import React, { Component } from 'react';
import Login from "./components/Login/Login";
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Login/Signup'
import { BrowserRouter  as Router, Route } from "react-router-dom";


export default function App () {
  return (
  <Router>
  <div className="app">
  <Route exact path="/login" component ={Login} />
  <Route exact path="/signup" component ={Signup} />

      </div>
</Router>
    );
  }
