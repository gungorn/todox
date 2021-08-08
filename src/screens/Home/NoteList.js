import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { T } from '~/components';

import { fontFamily, spaceSize } from '~/configs';
import { SEND, SET_NOTE } from '~/redux';
import { NoteItem } from '~/screens/Home/NoteItem';
import { sbh } from '~/utils/dimensions';
import { COLOR } from '~/utils/theme';

//import { SEND } from '~redux';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({});
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

const NoteList = conectWithRedux(props => {
    const { user } = props;
    const { userNotes } = user;

    const data = [];
    (userNotes || []).forEach(d => !d.archive && data.push(d));

    return useMemo(() => (
        <FlatList
            data={data}
            renderItem={d => <NoteItem {...d} />}
            keyExtractor={(d, i) => i.toString()}
        />
    ), [userNotes]);
});

const styles = StyleSheet.create({
});

export { NoteList };