import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const FavoriteItem = ({ item, onRemove }) => {
  return (
    <div className="exercice">
        <NavLink to={`/exercise/${item.id}`} className="link">
            <img src={item.gifUrl} alt={item.name} />
        </NavLink>
            <div><p>{item.equipment} </p><MdDelete className="fav_logo"  onClick={onRemove}/></div>
            <h3>{item.name}</h3>
        
    </div>
  );
};

export default FavoriteItem;
