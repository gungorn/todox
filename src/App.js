import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import store from '~redux';
import { Navigation } from '~/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {


    AsyncStorage.setItem(
        'test',
        JSON.stringify({ isim: 'nurettin', a: 'a', b: 'b', c: { d: 'd' } })
    )
        .then(d => {
            console.log(d, 'kaydedildi');
        })
        .catch();

    AsyncStorage.getItem('test')
        .then(d => {
            console.log('getirildi,', JSON.parse(d).isim);
        });

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