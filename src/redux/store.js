import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
