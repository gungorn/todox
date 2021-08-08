import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import store from '~redux';
import { Navigation } from '~/Navigation';

const App = () => {

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />

            <View style={{ flex: 1 }}>
                <Provider store={store}>
                    <Navigation />
                </Provider>
            </View>
        </>
    );
};

export { App };