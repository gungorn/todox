import React from 'react';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Home } from '~screens';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({});
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

const screens = createStackNavigator();

const Navigation = conectWithRedux(props => {
    const { user } = props;

    return (
        <NavigationContainer>
            <screens.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <screens.Screen
                    name={user.uid ? 'Home' : 'Splash'}
                    component={user.uid ? Home : Splash}
                />
            </screens.Navigator>
        </NavigationContainer>
    );
});

export { Navigation };