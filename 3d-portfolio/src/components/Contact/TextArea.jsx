import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@material-ui/core";
function TextArea(Props) {
  const { lable, name, ...rest } = Props;
  return (
    <div className="form-control ">
      <label htmlFor={name}>{lable}</label>
      <Field
        as={TextField}
        name={name}
        id={name}
        required
        {...rest}
        sx={{
          width: "100%",
          "& label": { color: "white" },
          "& input": {
            color: "blue",

            borderRadius: "10px",
          },
          bgcolor: "rgb(29, 24, 54)",
          mb: "30px",
        }}
        label="Your Message"
        multiline
        rows={3}
      />
      <ErrorMessage name={name} />
    </div>
  );
}

export default TextArea;
