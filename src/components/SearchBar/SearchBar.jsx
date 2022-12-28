import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt } from 'react-icons/bi';
import ProtoTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    search: '',
  };
  

  handleChange = event => {
    this.setState({ search: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if(this.state.search.trim() === '') {
      
      toast.warning("Введіть пошук");
      return;
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    const { search } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
          <BiSearchAlt size={32} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: ProtoTypes.func.isRequired,
};

export default SearchBar;