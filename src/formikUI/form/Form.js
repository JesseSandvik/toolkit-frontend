import { Formik, Form } from "formik";
import PropTypes from "prop-types";

function FormikWrapper({
  children,
  handleSubmit,
  initialstate,
  validation,
  ...props
}) {
  return (
    <Formik
      initialValues={initialstate}
      validationSchema={validation}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        handleSubmit(data);
        setSubmitting(false);
      }}
    >
      <Form {...props}>{children}</Form>
    </Formik>
  );
}

FormikWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialstate: PropTypes.objectOf(PropTypes.shape()).isRequired,
  validation: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default FormikWrapper;
