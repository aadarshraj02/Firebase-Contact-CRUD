import { ErrorMessage, Field, Form, Formik } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email ").required("Email is Required"),
});

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={async (values, { resetForm }) => {
            if (isUpdate) {
              await updateContact(values, contact.id);
              toast.success("Contact Updated Successfully");
            } else {
              await addContact(values);
              toast.success("Contact Added Successfully");
            }
            resetForm();
            onClose();
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xl font-medium" htmlFor="name">
                Name
              </label>
              <Field name="name" className="rounded-md border p-2" />
              <div className="text-sm text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl font-medium" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="rounded-md border p-2"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className="self-end rounded-md border bg-orange px-3 py-1.5 text-white">
              {isUpdate ? "Update " : "Add "}Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
