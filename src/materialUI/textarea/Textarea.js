import { TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

function Textarea({ name, ...props }) {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...props,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField multiline rows={4} {...configTextField} />;
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Textarea;
