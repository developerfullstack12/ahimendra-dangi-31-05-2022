import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectLocationStart } from "../../store/redux-slices/weatherData";
import { getCurrentWeather } from "../../utils/apiCalls";

function ItemConditions({ item, setSelectedCity }) {
  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    getCurrentWeather(item.key)
      .then(({ data }) => {
        setConditions(data[0]);
      })
      .catch((err) => {
        toast.error("No access to AccuWeather API", { autoClose: 3000 });
      });
  }, [item.key]);

  return (
    <Card>
      <CardActionArea onClick={() => setSelectedCity(item)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {item.name}
          </Typography>
          {conditions ? (
            <div>
              <br />
              <Typography variant="h4" display={"inline"}>
                {conditions.Temperature.Metric.Value}
              </Typography>
              <Typography variant="h4" display={"inline"}>
                ' C°'
              </Typography>
            </div>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const Favorite = ({ setRoute }) => {
  const { favorites } = useSelector((state) => state.favorite);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const setSelectedCity = (location) => {
    navigate("/");
    dispatch(selectLocationStart(location));
  };

  return (
    <Grid container pacing={1}>
      {favorites.map((item) => {
        return (
          <Grid item xs sm={3} key={item.key}>
            <ItemConditions item={item} setSelectedCity={setSelectedCity} />
          </Grid>
        );
      })}
    </Grid>
  );
};
