import React, { useEffect, useCallback } from "react";
import { DebounceInput } from "react-debounce-input";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { searchLocationStart } from "../../store/redux-slices/searchLocation";

const SearchLocation = ({ onSelection }) => {
  const { isLoading, locationList, error } = useSelector(
    (state) => state.searchLocation
  );
  const dispatch = useDispatch();
  const getLocationsList = (userInput) =>
    dispatch(searchLocationStart(userInput));
  useEffect(() => {
    if (error) {
      toast.error("error", { autoClose: 3000 });
      // resetErrorMessage()
    }
  }, [error]);

  const onSearch = (event) => {
    const { value: input } = event.target;
    if (input !== "") {
      dispatch(searchLocationStart(input));
    }
  };

  const onSelect = (e, input) => {
    if (input !== "") {
      for (let location of locationList) {
        if (input === location.LocalizedName) {
          onSelection({ name: location.LocalizedName, key: location.Key });
        }
      }
    }
  };
  return (
    <Autocomplete
      className="searchField w-50"
      id="free-solo-demo"
      freeSolo
      options={locationList?.map?.((city) => city.LocalizedName)}
      onChange={(e, option) => {
        onSelect(e, option);
      }}
      loading={isLoading}
      renderInput={(params) => (
        <DebounceInput
          {...params}
          debounceTimeout={500}
          element={TextField}
          onChange={onSearch}
          label="Location search"
          variant="filled"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchLocation;
