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
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000080]">
      <div className="bg-white w-[1000px] rounded-[15px] p-[45px] relative">
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

// const StyledModal = styled.div`
//   background: white;
//   width: 500px;
//   height: 600px;
//   border-radius: 15px;
//   padding: 15px;
// `;
// const StyledModalOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

export default Modal;
