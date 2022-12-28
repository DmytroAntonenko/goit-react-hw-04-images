import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={image.smallImg} 
      alt={image.tags}
      className="ImageGalleryItem-image"
      onClick={() => onClick(image.bigImg, image.tags)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    smallImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;