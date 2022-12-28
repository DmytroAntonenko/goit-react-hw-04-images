import ProtoTypes from 'prop-types';
import ImagesGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onModal }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImagesGalleryItem key={image.id} image={image} onClick={onModal} />
    ))}
  </ul>
);
ImageGallery.propTypes = {
  images: ProtoTypes.arrayOf(
    ProtoTypes.shape({ id: ProtoTypes.number.isRequired }).isRequired,
  ),
  onModal: ProtoTypes.func.isRequired,
};
export default ImageGallery;