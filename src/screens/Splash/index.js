import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { KEYBOARD_OPEN, KEYBOARD_CLOSE, USER_LOGIN, USER_SIGNIN, SET_IS_SIGN } from '~redux'; //user actions

import { stylesForLogin, stylesForSignIn } from './styles';
import { COLOR } from '~/utils/theme';
import { T } from '~/components';
import { keyboardListener } from '~/utils/keyboard';

//redux state to props
const mapStateToProps = ({ user }) => ({ user });

//redux dispatch to props
const mapDispatchToProps = dispatch => ({
    SET_IS_SIGN: payload => dispatch(SET_IS_SIGN(payload)), //action
    USER_LOGIN: payload => dispatch(USER_LOGIN(payload)), //action
    USER_SIGNIN: payload => dispatch(USER_SIGNIN(payload)), //action
    KEYBOARD_OPEN: h => dispatch(KEYBOARD_OPEN(h)), //action
    KEYBOARD_CLOSE: () => dispatch(KEYBOARD_CLOSE()), //action
});

//redux connect func
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

//component
const Splash = conectWithRedux(props => {

    useEffect(() => { //componentDidMount
        keyboardListener(props.KEYBOARD_OPEN, props.KEYBOARD_CLOSE);
    }, []);

    //states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    //user store
    const { user } = props;
    const { loginLoading, signInLoading, isSignIn } = user;

    const submit = () => {
        isSignIn ?
            props.USER_SIGNIN({ email, password, name }) :
            props.USER_LOGIN({ email, password });
    }


    const styles = isSignIn ? stylesForSignIn : stylesForLogin;

    return (
        <View style={styles.main}>
            <T style={styles.appName} font={'b'} size={'xxxxxl'}>My Note</T>

            <View style={styles.inputsContainer}>
                {
                    <TextInput
                        style={[styles.nameInput, { display: isSignIn ? 'flex' : 'none' }]}
                        placeholder={'İsminiz'}
                        value={name}
                        onChangeText={setName}
                        maxLength={64}
                    />
                }

                <TextInput
                    style={styles.emailInput}
                    placeholder={'E-Posta'}
                    value={email}
                    onChangeText={setEmail}
                    maxLength={64}
                    keyboardType={'email-address'}
                />

                <TextInput
                    style={styles.passwordInput}
                    placeholder={'Parola'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    maxLength={16}
                />

                {
                    <TextInput
                        style={[styles.passwordInput2, { display: isSignIn ? 'flex' : 'none' }]}
                        placeholder={'Tekrar'}
                        value={password2}
                        onChangeText={setPassword2}
                        secureTextEntry
                        maxLength={16}
                    />
                }
            </View>

            <Button
                type={'solid'}
                onPress={submit}
                loading={loginLoading || signInLoading}
                containerStyle={styles.submitButton}
                buttonStyle={{ backgroundColor: '#42a5f5' }}
                //titleStyle={{ textAlign: 'center', flex: 1 }}
                title={isSignIn ? 'Üye Ol' : 'Giriş Yap'}
            />

            <TouchableOpacity
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    props.SET_IS_SIGN(!isSignIn);
                }}
                style={styles.signInButton}
            >
                {isSignIn && <AntDesign name={'left'} size={16} color={COLOR('lightGray')} />}
                <T style={styles.signInButtonText}>{isSignIn ? 'Zaten Üyeyim' : 'Üye Ol'}</T>
            </TouchableOpacity>
        </View>
    );
});

export { Splash };