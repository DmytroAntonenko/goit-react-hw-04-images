import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal =({ offModal, image, imageTags }) => {

  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') offModal();
    };

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [ offModal ]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) offModal();
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={image} alt={imageTags}/>
      </div>
    </div>
  );
}

Modal.propTypes = {
    offModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    imageTags: PropTypes.string,
};

export default Modal;