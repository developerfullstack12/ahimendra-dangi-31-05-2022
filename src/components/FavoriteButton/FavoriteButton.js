import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//material ui
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/Star";

// import FavoriteIcon from '@material-ui/icons/Favorite';
import { addFavoritesStart } from "../../store/redux-slices/favorite";
import { Button } from "@mui/material";

const checkSavedInFavorites = (favorites, location) => {
  return favorites.find((item) => item.name === location.name) !== undefined;
};

export default function FavoriteButton({ selectedLocation }) {
  const { favorites } = useSelector((state) => state.favorite);

  const [isFavorite, setIsFavorite] = useState(
    checkSavedInFavorites(favorites, selectedLocation)
  );

  useEffect(() => {
    setIsFavorite(checkSavedInFavorites(favorites, selectedLocation));
  }, [selectedLocation, favorites]);

  const dispatch = useDispatch();

  const updateFavorites = (favorites) => dispatch(addFavoritesStart(favorites));

  const manageFavorites = () => {
    let favoritesArray = [...favorites];

    if (!isFavorite) {
      favoritesArray.push(selectedLocation);
      localStorage.setItem("Favorites", JSON.stringify(favoritesArray));
    } else {
      favoritesArray = favoritesArray.filter(
        (item) => item.key !== selectedLocation.key
      );
      localStorage.setItem("Favorites", JSON.stringify(favoritesArray));
    }
    updateFavorites(favoritesArray);
  };

  return (
    <div>
      <Button
        aria-label="favorites"
        variant="outlined"
        onClick={manageFavorites}
        startIcon={!isFavorite ? <StarBorderIcon /> : <StarIcon />}
      >
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </Button>
    </div>
  );
}
