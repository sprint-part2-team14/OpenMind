import ReactDOM from 'react-dom/client';

const ModalPortal = ({ children }) => {
  const el = ReactDOM.createRoot(document.getElementById('modal'));
  //const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
