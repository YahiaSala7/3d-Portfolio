import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Stack, TextField, Typography } from "@mui/material";
function Input(Props) {
  const { name, ...rest } = Props;
  return (
    <Stack className="form-control">
      <Field
        name={name}
        id={name}
        {...rest}
        as={TextField}
        required
        label={`Your ${name}`}
        sx={{
          m: "15px 0",
          width: "100%",
          color: "red",
          "& label": { color: "white" },
          "& input": {
            color: "white",
            bgcolor: "rgb(29, 24, 54)",
            borderRadius: "10px",
          },
        }}
      />
    </Stack>
  );
}

export default Input;
