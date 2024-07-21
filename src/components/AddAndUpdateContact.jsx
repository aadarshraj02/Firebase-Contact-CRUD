import { Field, Form, Formik } from "formik";
import Model from "./Model";

function AddAndUpdateContact({ isOpen, onClose }) {
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik>
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" />
            </div>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
