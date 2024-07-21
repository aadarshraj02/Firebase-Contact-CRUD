/* eslint-disable no-unused-vars */
import { AiOutlineClose } from "react-icons/ai";

function Model({ onClose, isOpen, children }) {
  return (
    <>
      {isOpen && (
        <>
          <div className="relative z-20 min-h-[300px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-3xl"
              />
            </div>
          </div>

          <div className="absolute top-0 z-10 h-screen w-screen backdrop-blur-md" />
        </>
      )}
    </>
  );
}

export default Model;
