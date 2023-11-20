import React, { useState, useEffect } from 'react';
import FavoriteItem from '../components/FavoriteItem';
import '../styles/favorite.css';
import ReactPaginate from "react-paginate";
import "swiper/css/pagination";
import "../styles/pagination.css";


const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    let itemsPerPage = 6;
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const pageCount = Math.ceil(favorites.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

//   // Function to remove an item from favorites
  const removeFromFavorites = (itemToRemove) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((item) => item !== itemToRemove);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  const displayFav = favorites.slice(startIndex, endIndex);
  return (
    <div>
        <span class="bg__blur first_blur_fav"></span>
        <span class="bg__blur second_blur_fav"></span>
    <div className='hey'>HEY</div>
    <div className='buddy'>BUDDY</div>
    <div className='fav'>FAVORITES</div>
    <div className='fav_container'>
      <div className='fav_items'>
      {displayFav.map((favorite, index) => (
          <FavoriteItem
            key={index}
            item={favorite}
            onRemove={() => removeFromFavorites(favorite)}
          />
        ))}
      </div>
    </div>
    {favorites.length > 0 && (
        <div className="pagination">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={'Précédent'}
            nextLabel={'Suivant'}
            containerClassName="paginationBttns"
          />
        </div>
      )}
    </div>
  );
};

export default Favorite;
