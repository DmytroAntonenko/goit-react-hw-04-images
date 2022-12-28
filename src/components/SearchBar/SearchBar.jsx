import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt } from 'react-icons/bi';
import ProtoTypes from 'prop-types';

const SearchBar =({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => setSearch(event.currentTarget.value);
  
  const handleSubmit = event => {
        event.preventDefault();
        if(search.trim() === '') {
          
          toast.warning("Введіть пошук");
          return;
        }
    
        onSubmit(search);
        setSearch('');
      };


  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: ProtoTypes.func.isRequired,
};

export default SearchBar;