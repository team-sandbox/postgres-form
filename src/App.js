import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field } from 'formik'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Formik 
        initialValues={{ plant_name: '', plant_type: '' }}
        validate={values => {
          const errors = {}
          if (!values.email){
            errors.plantName = 'Required'
          }
          else if (!values.plantType){
            errors.plantType = 'Required'
          }
          return errors;
        }}
        onSubmit = {(values) => {
          alert(JSON.stringify(values, null, 2));
          }
        }>
        {() => (
          <Form>
            <Field type="plant_name" name="plant_name" />
            <Field type="plant_type" name="plant_type" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
