import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

function Select({ name, options, placeholder, ...props }) {
  const [field, meta] = useField(name);

  const configSelect = {
    ...field,
    ...props,
    select: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {options.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  placeholder: undefined,
};

export default Select;
