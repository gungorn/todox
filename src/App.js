import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from '~redux';
import { Navigation } from '~/Navigation';

const App = () => {

    return (
        <View style={{ flex: 1 }}>
            <Provider store={store}>
                <Navigation />
            </Provider>
        </View>
    );
};

export { App };