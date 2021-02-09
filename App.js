import React from 'react';

//For Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import AppContainer from '@/Navigators';
import reducers from '@/Stores';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
