import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import { TextareaAutosize } from "@material-ui/core";
function TextArea(Props) {
  const { name, ...rest } = Props;
  return (
    <Box className="form-control ">
      <Field
        as={TextField}
        name={name}
        id={name}
        required
        {...rest}
        sx={{
          width: "100%",
          "& label": { color: "white" },
          "& textArea": {
            color: "white",
            borderRadius: "10px",
          },
          bgcolor: "rgb(29, 24, 54)",
          m: "15px 0",
        }}
        label="Your Message"
        multiline
        rows={3}
      />
    </Box>
  );
}

export default TextArea;
