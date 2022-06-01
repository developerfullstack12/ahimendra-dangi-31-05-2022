import { takeLatest, put } from "redux-saga/effects";
// import { toast } from '../../components/Toast'
import {
  addFavoritesStart,
  addFavoritesSuccess,
  addFavoritesFailure,
} from "../redux-slices/favorite";

export default function* favoriteWatcher() {
  yield takeLatest(addFavoritesStart.type, addFavoriteWorker);
}

function* addFavoriteWorker(action) {
  try {
    yield put(addFavoritesSuccess(action.payload));
  } catch (e) {
    yield put(addFavoritesFailure(e.message));
  }
}
