import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import AppNavigator from './src/navigation/navigation';

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}