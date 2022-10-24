import { Button } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import { ModalChild } from "components/Modal/ModalChild";
import { Searchbar } from "components/Searchbar/Searchbar";
import { SearchForm } from "components/Searchbar/SearchForm";
import { fetchImages } from "fetch/fetchImages";
import { Component } from "react";

export class AppBox extends Component {
    state = {
        query: "",
        page: 1,
        pictures: [],
        showModal: false,
        modalSrc: "",
        status: "idle",
        error: null,
        totalHits: 0
    }
    componentDidUpdate(_, prevState) {
        const {query, page, pictures} = this.state
        if (prevState.query !== query) {
            this.setState({status:"pending"})
        }
        if (prevState.query !== query || prevState.page !== page) {
            fetchImages(query, page)
                .then(response => {
                    this.setState({status: "resolved"})
                    const results = response.data.hits
                    this.setState({ pictures: [...pictures, ...results], totalHits: response.data.totalHits })
                }).catch(error => {
                this.setState({error, status: "rejected"})
            })
        }
    }

    submitInfo = (evt) => {
        evt.preventDefault()
        if (evt.target.elements.query.value === "") {
            alert("Please, enter something")
        } else {
            this.setState({query:evt.target.elements.query.value, page: 1, pictures: []})
        }
    }

    loadMore = (evt) => {
        evt.preventDefault()
        this.setState({page:this.state.page+1})
    }

    toggleModal = (evt) => {
        this.setState(({ showModal }) => ({showModal:!showModal}))
    }

    openModalImage = (evt) => {
        evt.preventDefault()
        this.toggleModal()
        this.setState({modalSrc:evt.target.dataset.src })
    }
    
    render() {
        const {status, pictures, query, showModal, modalSrc, totalHits} = this.state
        return (
            <>
                <Searchbar>
                    <SearchForm onSubmit={this.submitInfo}/>
                </Searchbar>

                {status === "pending" && 
                    <Loader />}
                
                {status === "resolved" &&
                    <>
                    <ImageGallery imagesArray={pictures} openModalImage={this.openModalImage} query={query} />
                    {pictures.length !== 0 && pictures.length < totalHits && <Button loadMore={this.loadMore} />}
                    </>
                }
                
                {showModal &&
                    <Modal closeModal={this.toggleModal}>
                        <ModalChild modalSrc={modalSrc} query={query}/>
                    </Modal>
                }
            </>
        )
    }
}
