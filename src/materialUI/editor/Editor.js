import { FormGroup } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

function EditorWrapper({ name, placeholder, ...props }) {
  const [field, meta] = useField(name);
  const { setFieldTouched, setFieldValue } = useFormikContext();

  const configEditor = {
    ...field,
    ...props,
  };

  return (
    <FormGroup id="editor">
      <Editor
        apiKey="90dgsrdnk0v7gmheukvm5g9b8ghcd3m5qrggkptfg5vatybl"
        className="editor-body"
        {...configEditor}
        onBlur={() => setFieldTouched(field.name, true)}
        onEditorChange={(value) => setFieldValue(field.name, value)}
        init={{
          branding: false,
          height: 350,
          menubar: false,
          placeholder,
          selector: "#editor",
          statusbar: false,
          plugins: ["advlist autolink lists link searchreplace hr table"],
          toolbar:
            "undo redo copy cut paste | fontsizeselect formatselect forecolor | " +
            "bold italic underline backcolor | alignleft aligncenter alignright |" +
            "bullist numlist outdent indent | table | hr link",
          width: "100%",
        }}
      />
      {meta.touched && meta.error ? meta.error : ""}
    </FormGroup>
  );
}

EditorWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

EditorWrapper.defaultProps = {
  placeholder: undefined,
};

export default EditorWrapper;
