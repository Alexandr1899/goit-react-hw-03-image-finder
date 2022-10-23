import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";
import { GalleryList } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
    render() {
        return (
            <GalleryList>
                {this.props.imagesArray.map(image => {
                    const {id, webformatURL, largeImageURL} = image
                    return (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} openModalImage={this.props.openModalImage} query={this.props.query} />
                    )
                })}
            </GalleryList>
        )
    }
}

ImageGallery.propTypes = {
    imagesArray: PropTypes.arrayOf(PropTypes.object)
}