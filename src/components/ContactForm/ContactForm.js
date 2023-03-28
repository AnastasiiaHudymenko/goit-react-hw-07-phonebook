import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  FormStyled,
  InputStyled,
  Button,
  Title,
  Label,
  Errormsg,
} from './ContactForm.styled';

let userSchema = object({
  name: string().required(),
  number: string().required(),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
    >
      <FormStyled>
        <Label>
          <Title>Name</Title>
          <InputStyled placeholder="Name" type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <Errormsg>{msg}</Errormsg>}
          </ErrorMessage>
        </Label>
        <Label>
          <Title>Number</Title>
          <InputStyled placeholder="Number" type="tel" name="number" />
          <ErrorMessage name="number">
            {msg => <Errormsg>{msg}</Errormsg>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
