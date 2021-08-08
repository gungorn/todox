import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { } from '~/components';

import { fontFamily } from '~/configs';
import { SEND, SET_NOTE } from '~/redux';
import { sbh } from '~/utils/dimensions';
import { COLOR } from '~/utils/theme';

//import { SEND } from '~redux';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
    SEND: payload => dispatch(SEND(payload)),
    SET_NOTE: payload => dispatch(SET_NOTE(payload)),
});
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

const Home = conectWithRedux(props => {
    const { user } = props;

    const sendNote = () => {
        props.SEND(user);
    };

    return (
        <View style={styles.main}>
            <Input
                value={user.note}
                onChangeText={props.SET_NOTE}
                placeholder={'Bir şeyler not alın...'}
                label={`Hello, ${user.name}`}
                labelStyle={styles.inputLabel}
                returnKeyType={'done'}
                blurOnSubmit
                onBlur={sendNote}
                multiline
            />

        </View>
    );
});

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: '3%',
        paddingTop: sbh * 1.2
    },
    inputLabel: {
        fontFamily: fontFamily.b,
        color: COLOR('blue'),
        fontSize: 16
    }
});

export { Home };