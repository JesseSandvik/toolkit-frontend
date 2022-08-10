import { Autocomplete, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

function AutoCompleteComboBox({ name, options, label, ...props }) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const configAutoCompleteSelect = {
    ...field,
    ...props,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configAutoCompleteSelect.error = true;
    configAutoCompleteSelect.helperText = meta.error;
  }

  return (
    <Autocomplete
      {...props}
      freeSolo
      options={options}
      value={field.value ? field.value : ""}
      isOptionEqualToValue={(option, value) =>
        option.display_name === value.display_name
      }
      onChange={(event, value) => {
        setFieldValue(name, value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...configAutoCompleteSelect}
          label={label}
          placeholder="Search the Flexible Systems library by keyword..."
          // InputProps={{
          //   ...params.InputProps,
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <Icon className="fa-solid fa-magnifying-glass" />
          //     </InputAdornment>
          //   ),
          // }}
        />
      )}
    />
  );
}

AutoCompleteComboBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};

AutoCompleteComboBox.defaultProps = {
  label: undefined,
};

export default AutoCompleteComboBox;
