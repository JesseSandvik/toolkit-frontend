import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

function DatePickerWrapper({ name, ...props }) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const configTextField = {
    ...field,
    ...props,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        {...configTextField}
        onChange={(value) => setFieldValue(field.name, value)}
        value={field.value || null}
        renderInput={(params) => (
          <TextField
            helperText={configTextField.helperText}
            error={configTextField.error}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}

DatePickerWrapper.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DatePickerWrapper;
