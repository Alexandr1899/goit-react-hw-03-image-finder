import { Component } from "react";
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    render() {
        return (
            <GalleryItem>
                <GalleryImage src={this.props.webformatURL} alt={this.props.query} onClick={this.props.openModalImage} data-src={this.props.largeImageURL} />
            </GalleryItem>
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    query: PropTypes.string,
    openModalImage: PropTypes.func,
    largeImageURL: PropTypes.string
}