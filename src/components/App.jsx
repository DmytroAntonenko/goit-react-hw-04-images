import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

import getImages from './services/api';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';


class App extends Component {
  state = {
    images: [],
    name: '',
    page: 1,
    totalPages: null,
    isLoading: false,
    isloadMore: false,
    error: null,
    currentImage: false,
  }

  handleSearchBar = searchName => {
    this.setState(() => ({ 
      name: searchName,
      images: [],
      page: 1,
     }));
  };

  async componentDidUpdate(_, prevState) {
    const { page, name } = this.state;
    if (
      prevState.name !== name ||
      prevState.page !== page
    ) {
      try {
        this.setState({
          isLoading: true,
          error: null,
          isloadMore: true,
        });
        const searchImages = await getImages(
          name,
          page
				);
				const newImages = searchImages.map(searchImage=>({ id: searchImage.id, tags: searchImage.tags, smallImg: searchImage.webformatURL, bigImg: searchImage.largeImageURL }));
				this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
        if (searchImages.length !== 12) {
          this.setState.apply({ isloadMore: false });
        }
        
      } catch {
          this.setState({ error: 'error'});
          toast.warning("Нічого не знайдено. Введіть коректне значення!");
        
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }


  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = image => {
    this.setState({ currentImage: image });
  };

  handleCloseModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { images, isloadMore, isLoading, error, currentImage, tags } = this.state;
    
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchBar}/>
        <ImageGallery images={images} onModal={this.handleOpenModal} />
        {currentImage && (
          <Modal image={currentImage} imageTags={tags} offModal={this.handleCloseModal} />
        )}
        <ToastContainer autoClose={2000} />
        {isLoading && <Loader />}
        {isloadMore && !error && !isLoading && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
};

export default App;