import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";
import emailjs from "@emailjs/browser";
import CanvasLoader from "../Loader";
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
function FormikContainer() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (values) => {
    console.log(values);
    const { name, email, message } = values;
    setLoading(true);
    emailjs
      .send(
        "service_imku8q5",
        "template_j6e1bly",
        {
          from_name: name,
          to_name: "Yahia Salah",
          from_email: email,
          to_email: "yahiazahran9@gmail.com",
          message: message,
        },
        "uwACs1OEz7Npx7tWw"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <Form>
            <Stack justifyContent="space-between">
              <FormikControl control="input" name="name" type="name" />
              <FormikControl control="input" name="email" type="email" />
              <FormikControl control="textarea" name="message" />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "rgb(29, 24, 54)",
                  width: "fit-content",
                  "&:hover": { bgcolor: "rgb(29, 24, 54)" },
                  m: "15px 0",
                }}>
                submit
              </Button>
              {loading ? <CanvasLoader /> : "Send"}
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
