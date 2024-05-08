/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './state/store.ts';
import RootStack from './navigation/RootStack.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}

export default App;
