import { Field } from "formik";
import PropTypes from "prop-types";

import AutoCompleteComboBox from "../../materialUI/comboBox/AutoCompleteComboBox";
import Checkbox from "../../materialUI/checkbox/Checkbox";
import DatePicker from "../../materialUI/datePicker/DatePicker";
import Editor from "../../materialUI/editor/Editor";
import SearchBar from "../../materialUI/searchBar/SearchBar";
import Select from "../../materialUI/select/Select";
import Switch from "../../materialUI/switch/Switch";
import Textarea from "../../materialUI/textarea/Textarea";
import TextField from "../../materialUI/textInput/TextInput";

function FieldWrapper({ asComponent, name, ...props }) {
  const setMaterialUIComponent = (componentName) => {
    if (!componentName) return TextField;
    switch (componentName) {
      case "textfield":
        return TextField;
      case "textarea":
        return Textarea;
      case "autoCompleteComboBox":
        return AutoCompleteComboBox;
      case "select":
        return Select;
      case "datepicker":
        return DatePicker;
      case "checkbox":
        return Checkbox;
      case "switch":
        return Switch;
      case "editor":
        return Editor;
      case "searchBar":
        return SearchBar;
      default:
        return TextField;
    }
  };

  return (
    <Field as={setMaterialUIComponent(asComponent)} name={name} {...props} />
  );
}

FieldWrapper.propTypes = {
  asComponent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FieldWrapper;
