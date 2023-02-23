import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ProductExperience from "./ProductExperience";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000080] overflow-hidden">
      <div className="bg-white top-[1px] bottom-[20px] w-[1000px] rounded-[15px] p-[25px] relative">
        <div className="flex justify-end text-[25px] absolute right-5 top-4">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <ProductExperience />
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
