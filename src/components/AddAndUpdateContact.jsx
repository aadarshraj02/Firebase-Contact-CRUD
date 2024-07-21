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
              <Field name="name" className="rounded-md border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="rounded-md border" />
            </div>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
