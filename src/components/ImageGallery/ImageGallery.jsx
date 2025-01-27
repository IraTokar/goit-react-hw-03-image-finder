import React from "react";
import PropTypes from 'prop-types'
import {GalleryList} from './ImageGallery.styles'


import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
    
const ImageGallery = ({images}) => {
    return (
        <GalleryList>
            {images.map(image => 
               ( <ImageGalleryItem key = {image.id} image = {image}/>)
            
            )}
        </GalleryList>
    )
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;



