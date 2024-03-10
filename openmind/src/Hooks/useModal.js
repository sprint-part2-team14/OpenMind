import { useState } from 'react';

const useModal = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
    console.log(modalState);
  };

  const closeModal = () => {
    setModalState(false);
    console.log(modalState);
  };

  return {
    modalState,
    openModal,
    closeModal,
  };
};

export default useModal;
