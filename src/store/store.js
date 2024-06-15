import { createStore, combineReducers } from 'redux';

// Action types
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

// Action creators
export const updateUsername = (newUsername) => ({
  type: UPDATE_USERNAME,
  payload: newUsername,
});

export const updateGitHubToken = (newToken) => ({
  type: UPDATE_TOKEN,
  payload: newToken,
}); 

// Initial states
const initialUserState = {
  username: "",
};

const initialGitHubTokenState = {
  github_token: "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",
};

// Reducers
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const githubReducer = (state = initialGitHubTokenState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, github_token: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  github: githubReducer,
});

// Create the store
const store = createStore(rootReducer);

export default store;
