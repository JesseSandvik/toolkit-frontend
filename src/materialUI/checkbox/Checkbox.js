import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

function CheckboxComponent({ className, label, name }) {
  const [field, meta] = useField(name);

  return (
    <FormControlLabel
      className={className}
      checked={field.value}
      control={<Checkbox color="success" />}
      error={meta && meta.touched && meta.error ? true : undefined}
      label={label}
      name={field.name}
      onBlur={field.onBlur}
      onChange={field.onChange}
      variant="outlined"
    />
  );
}

CheckboxComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

CheckboxComponent.defaultProps = {
  className: undefined,
  label: undefined,
};

export default CheckboxComponent;
