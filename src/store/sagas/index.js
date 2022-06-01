import { spawn } from "redux-saga/effects";

import weatherWatcher from "./weather";
import searchLocationWatcher from "./searchLocation";
import favoriteWatcher from "./favorite";

export default function* rootSaga() {
  yield spawn(weatherWatcher);
  yield spawn(searchLocationWatcher);
  yield spawn(favoriteWatcher);
}
