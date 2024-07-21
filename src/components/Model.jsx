/* eslint-disable no-unused-vars */
import { AiOutlineClose } from "react-icons/ai";

function Model({ onClose, isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className="min-h-[200px] max-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={onClose}
              className="cursor-pointer text-3xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Model;
