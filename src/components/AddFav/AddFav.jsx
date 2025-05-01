import React, { useState, useEffect } from "react";

const AddFav = ({ itemId, favorites, setFavorites }) => {
  const toggleFavorite = () => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <div>
      <button onClick={() => toggleFavorite()}>
        {favorites.includes(itemId) ? (
          <ion-icon name="star"></ion-icon>
        ) : (
          <ion-icon name="star-outline"></ion-icon>
        )}
      </button>
    </div>
  );
};

export default AddFav;
