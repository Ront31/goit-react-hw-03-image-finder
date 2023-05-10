import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.image} src={image.webformatURL} alt={image.tags} />
    </li>
  );
};
