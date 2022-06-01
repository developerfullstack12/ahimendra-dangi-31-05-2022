import { takeLatest, put } from "redux-saga/effects";
import { getCurrentWeather } from "../../utils/apiCalls";
// import { toast } from '../../components/Toast'
import {
  getCurrentWeatherStart,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
  selectLocationStart,
  selectLocationComplete,
} from "../redux-slices/weatherData";

export default function* weatherWatcher() {
  yield takeLatest(getCurrentWeatherStart.type, getCurrentWeatherWorker);
  yield takeLatest(selectLocationStart.type, selectLocationWorker);
}

function* getCurrentWeatherWorker(action) {
  try {
    const locationKey = action && action.payload;
    const data = yield getCurrentWeather(locationKey);

    yield put(getCurrentWeatherSuccess(data));
  } catch (e) {
    yield put(getCurrentWeatherFailure(e.message));
  }
}

function* selectLocationWorker(action) {
  try {
    yield put(selectLocationComplete(action.payload));
  } catch (e) {
    // yield put(getCurrentWeatherFailure(e.message))
  }
}
