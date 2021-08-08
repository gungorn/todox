import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { T } from '~/components';

import { spaceSize } from '~/configs';
import { SEND, SET_NOTE, NOTE_ARCHIVE } from '~redux';
import { COLOR } from '~/utils/theme';

//import { SEND } from '~redux';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
    SEND: payload => dispatch(SEND(payload)),
    SET_NOTE: payload => dispatch(SET_NOTE(payload)),
    NOTE_ARCHIVE: payload => dispatch(NOTE_ARCHIVE(payload)),
});
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

let doublePress = false, doublePressID = null;

const NoteItem = conectWithRedux(props => {
    const { user, item: { noteid, text, createDate, archive }, index } = props;

    const onPressNote = () => {
        if (doublePress && doublePressID === noteid) {
            props.NOTE_ARCHIVE({ noteid, archive: !archive, uid: user.uid });
        }
        else {
            doublePress = true;
            doublePressID = noteid;
            setTimeout(() => (doublePress = false), 250);
        }
    };

    return useMemo(
        () => {
            console.log('test');

            return (
                <TouchableOpacity
                    style={styles.noteItem}
                    onPress={onPressNote}
                >
                    <T>{text}</T>
                </TouchableOpacity>
            );
        },
        [text, archive]
    );
});

const styles = StyleSheet.create({
    noteItem: {
        borderBottomWidth: 1,
        marginBottom: spaceSize.m,
        paddingBottom: spaceSize.xxs,
        borderColor: COLOR('lightGray')
    }
});

export { NoteItem };