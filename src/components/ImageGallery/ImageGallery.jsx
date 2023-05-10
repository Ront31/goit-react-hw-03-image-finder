import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem image={image} key={index} />
      ))}
    </ul>
  );
};
