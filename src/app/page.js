"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Product from "./components/Product";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, []);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-screen bg-[#ededed]">
      <Header />
      <Product />
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      <div className="" id="modal-root"></div>
    </div>
  );
}
