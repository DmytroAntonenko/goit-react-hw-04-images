import { Component } from 'react';
import PropTypes from 'prop-types';


class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') this.props.offModal();
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) this.props.offModal();
  };

  render() {
    const { image, imageTags } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={image} alt={imageTags}/>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    offModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    imageTags: PropTypes.string,
};

export default Modal;