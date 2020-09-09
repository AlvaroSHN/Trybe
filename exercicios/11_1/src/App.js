import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Exercise01 from './Component';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const ListArray = ['Palavra', 'Teste', 'Listagem', 'XABLAU'];
  return  ListArray.map(element => task(element));  
}

export default App;
