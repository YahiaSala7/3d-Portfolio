import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, TextField } from "@mui/material";
function Input(Props) {
  const { label, name, ...rest } = Props;
  return (
    <Box className="form-control ">
      {/* <label htmlFor={name}>{label}</label> */}
      <Field
        name={name}
        id={name}
        {...rest}
        as={TextField}
        required
        label={`Your ${name}`}
        error={!name}
        helperText={!name ? "Required" : ""}
        sx={{
          mb: "30px",
          width: "100%",
          color: "red",
          "& label": { color: "white" },
          "& input": {
            color: "blue",
            bgcolor: "rgb(29, 24, 54)",
            borderRadius: "10px",
          },
          "& .MuiInputBase-helperText": { color: "green" },
        }}
      />
      {/* <ErrorMessage name={name} /> */}
    </Box>
  );
}

export default Input;
