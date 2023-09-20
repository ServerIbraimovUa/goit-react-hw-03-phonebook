import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormEl } from './ContactForm.styled';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  schema = () => {
    return yup.object().shape({
      name: yup.string().min(4).max(32).required(),
      number: yup.string().min(6).max(16).required(),
    });
  };

  handleSubmit = (value, { resetForm }) => {
    this.props.onSubmit(value);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <FormEl>
          <label htmlFor="nameId">Name</label>
          <Field
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            id="nameId"
          />
          <ErrorMessage name="name" />
          <label htmlFor="numId">Number</label>
          <Field
            type="tel"
            name="number"
            placeholder="066-459-12-56"
            id="numId"
          />
          <ErrorMessage name="number" />

          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    );
  }
}
