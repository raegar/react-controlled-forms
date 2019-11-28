import React from 'react';
import FormContainer from './containers/FormContainerNew';
//import FormContainerOld from './containers/FormContainerOld';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Controlled Form</p>
      </header>
      <section className="App-body">
        <FormContainer />
        <p>Press F12 to open DevTools and observe the console output while using this</p>
      </section>
    </div>
  );
}

export default App;
