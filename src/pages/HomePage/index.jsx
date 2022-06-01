import {
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import moment from "moment";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

import SearchLocation from "../../components/SearchLocation";
import {
  getCurrentWeatherStart,
  selectLocationStart,
} from "../../store/redux-slices/weatherData";

const HomePage = () => {
  const { currentWeather, selectedLocation, isLoading } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const setSelectedCity = (location) => {
    dispatch(selectLocationStart(location));
  };

  const getLocationConditions = useCallback(
    (locationKey) => {
      dispatch(getCurrentWeatherStart(locationKey));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectedLocation) {
      getLocationConditions(selectedLocation.key);
    }
  }, [selectedLocation, getLocationConditions]);

  return (
    <>
      <Grid container style={{maxWidth: '1200px', padding: '0px 30px', margin: '0px auto',}}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <SearchLocation onSelection={setSelectedCity} />
        </Grid>
        {!isLoading && selectedLocation ? (
          <Grid item xs={12}>
            {currentWeather && (
              <Card className="">
                <CardHeader
                  action={
                    <FavoriteButton selectedLocation={selectedLocation} />
                  }
                  title={
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="h2"
                      color="inherit"
                      style={{fontSize: '30px'}}
                    >
                      {selectedLocation.name}
                      <Typography variant="h2"  style={{fontSize: '35px', fontWeight: '400',}}>
                        {moment(
                          currentWeather?.LocalObservationDateTime
                        ).format("MMMM Do YYYY")}
                      </Typography>
                    </Typography>
                  }
                ></CardHeader>
                <br />
                <br />
                <CardContent>
                  <Typography variant="h4" component="h4" display={"inline"}>
                    {`${currentWeather?.Temperature?.Metric?.Value}  C° `}
                  </Typography>
                  <Typography variant="h4" display={"inline"}>
                    {currentWeather.WeatherText}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
};
export default HomePage;
