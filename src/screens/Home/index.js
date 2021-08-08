import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { T } from '~/components';

import { fontFamily, spaceSize } from '~/configs';
import { SEND, SET_NOTE } from '~/redux';
import { ArchiveList } from '~/screens/Home/ArchiveList';
import { NoteItem } from '~/screens/Home/NoteItem';
import { NoteList } from '~/screens/Home/NoteList';
import { sbh, w, W } from '~/utils/dimensions';
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
                onChangeText={d => console.log(d)}
                placeholder={'Bir şeyler not alın...'}
                label={`Hello, ${user.name}`}
                labelStyle={styles.inputLabel}
                returnKeyType={'done'}
                blurOnSubmit
                onBlur={sendNote}
                multiline
            />

            <NoteList />

            <View style={{ height: 2, width: w, backgroundColor: COLOR('blue'), marginVertical: spaceSize.l }} />
            <ArchiveList />
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
    },

    noteItem: {
        borderBottomWidth: 1,
        marginBottom: spaceSize.m,
        paddingBottom: spaceSize.xxs,
        borderColor: COLOR('lightGray')
    }
});

export { Home };