import { takeLatest, put } from "redux-saga/effects";
import { locationAutoComplete } from "../../utils/apiCalls";
// import { toast } from '../../components/Toast'
import {} from "../redux-slices/favorite";
import {
  searchLocationFailure,
  searchLocationStart,
  searchLocationSuccess,
} from "../redux-slices/searchLocation";

export default function* searchLocationWatcher() {
  yield takeLatest(searchLocationStart.type, searchLocationWorker);
}

function* searchLocationWorker(action) {
  try {
    const query = action && action.payload;
    const data = yield locationAutoComplete(query);

    yield put(searchLocationSuccess(data));
  } catch (e) {
    yield put(searchLocationFailure(e.message));
  }
}
