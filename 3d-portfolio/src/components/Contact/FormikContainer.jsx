import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("invalid email format").required("Required !"),
  message: Yup.string().required("Required !"),
});
const onSubmit = (values) => console.log("Form Data", values);

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <Stack justifyContent="space-between">
              <FormikControl
                control="input"
                name="name"
                label="name"
                type="name"
              />
              <FormikControl
                control="input"
                name="email"
                label="email"
                type="email"
              />
              <FormikControl
                control="textarea"
                name="comments"
                label="comments"
              />
              <Button type="submit" variant="contained">
                submit
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
