import { Switch, FormControlLabel } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

function SwitchComponent({ name, ...props }) {
  const [field, meta] = useField(name);

  const configSwitch = {
    ...field,
    ...props,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configSwitch.error = true;
    configSwitch.helperText = meta.error;
  }

  return (
    <FormControlLabel
      {...configSwitch}
      control={<Switch checked={field.value} />}
    />
  );
}

SwitchComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SwitchComponent;
