function Model({ onClose, isOpen, children }) {
  return <>{isOpen && <div>Modal</div>}</>;
}

export default Model;
