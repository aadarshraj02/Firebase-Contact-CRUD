import Model from "./Model";

function AddAndUpdateContact({ isOpen, onClose }) {
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        Hi
      </Model>
    </div>
  );
}

export default AddAndUpdateContact;
