import { Formik } from "formik";
import Model from "./Model";

function AddAndUpdateContact({ isOpen, onClose }) {
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik></Formik>
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
