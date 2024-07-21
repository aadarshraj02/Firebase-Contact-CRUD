import { Field, Form, Formik } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

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
          onSubmit={(values) =>
            isUpdate(values, contact.id) ? updateContact : addContact(values)
          }
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xl font-medium" htmlFor="name">
                Name
              </label>
              <Field name="name" className="rounded-md border p-2" />
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
