import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { KEYBOARD_OPEN, KEYBOARD_CLOSE, USER_SIGNIN, USER_SIGNUP, SET_IS_SIGN } from '~redux'; //user actions

import { stylesForLogin, stylesForSignIn } from './styles';
import { COLOR } from '~/utils/theme';
import { T } from '~/components';
import { keyboardListener } from '~/utils/keyboard';
import { asyncStorageKeys, getAsync } from '~/utils/asyncStorage';

//redux state to props
const mapStateToProps = ({ user }) => ({ user });

//redux dispatch to props
const mapDispatchToProps = dispatch => ({
    SET_IS_SIGN: payload => dispatch(SET_IS_SIGN(payload)), //action
    USER_SIGNIN: payload => dispatch(USER_SIGNIN(payload)), //action
    USER_SIGNUP: payload => dispatch(USER_SIGNUP(payload)), //action
    KEYBOARD_OPEN: h => dispatch(KEYBOARD_OPEN(h)), //action
    KEYBOARD_CLOSE: () => dispatch(KEYBOARD_CLOSE()), //action
});

//redux connect func
const conectWithRedux = connect(mapStateToProps, mapDispatchToProps);

//component
const Splash = conectWithRedux(props => {

    //states
    const [start, setStart] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    //user store
    const { user } = props;
    const { loginLoading, signInLoading, isSignIn } = user;

    const submit = () => {
        isSignIn ?
            props.USER_SIGNUP({ email, password, name }) :
            props.USER_SIGNIN({ email, password });
    };


    //useEffect useState den sonra kullanılmalıdır
    useEffect(async () => { //componentDidMount
        keyboardListener(props.KEYBOARD_OPEN, props.KEYBOARD_CLOSE); //keyboard listeners

        const userSecret = await getAsync(asyncStorageKeys.userSecret);
        if (userSecret?.signin) { //kullanıcı daha önce giriş yapmış (burada süre kontrolü yapılabilir!)
            props.USER_SIGNIN(userSecret);
        }
        else {
            setTimeout(() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setStart(true);
            }, 500);
        }
    }, []);

    return (
        <View style={styles.main}>
            <T
                style={styles.appName}
                font={'b'}
                size={start ? 'xxxxl' : 'x6l'}
            >
                My Note
            </T>

            <View style={[styles.inputsContainer, { display: start ? 'flex' : 'none' }]}>
                <View style={{ width: '100%', display: isSignIn ? 'flex' : 'none' }}>
                    <Input
                        placeholder={'İsminiz'}
                        value={name}
                        onChangeText={setName}
                        maxLength={64}
                        leftIcon={{ type: 'MaterialIcons', name: 'drive-file-rename-outline', color: COLOR('gray') }}
                    />
                </View>

                <Input
                    placeholder={'E-Posta'}
                    value={email}
                    onChangeText={setEmail}
                    maxLength={64}
                    keyboardType={'email-address'}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: 'email', color: COLOR('gray') }}
                />

                <Input
                    placeholder={'Parola'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    maxLength={16}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: 'lock', color: COLOR('gray') }}
                />

                <View style={{ width: '100%', display: isSignIn ? 'flex' : 'none' }}>
                    <Input
                        placeholder={'Tekrar'}
                        value={password2}
                        onChangeText={setPassword2}
                        secureTextEntry
                        maxLength={16}
                        leftIcon={{
                            type: 'MaterialCommunityIcons', name: 'lock', color: COLOR('gray')
                        }}
                    />
                </View>
            </View>

            {start &&
                <Button
                    type={'solid'}
                    onPress={submit}
                    loading={loginLoading || signInLoading}
                    containerStyle={styles.submitButton}
                    buttonStyle={{ backgroundColor: '#42a5f5' }}
                    //titleStyle={{ textAlign: 'center', flex: 1 }}
                    title={isSignIn ? 'Üye Ol' : 'Giriş Yap'}
                />}

            {start &&
                <TouchableOpacity
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        props.SET_IS_SIGN(!isSignIn);
                    }}
                    style={styles.signInButton}
                >
                    {isSignIn && <AntDesign name={'left'} size={16} color={COLOR('lightGray')} />}
                    <T style={styles.signInButtonText}>{isSignIn ? 'Zaten Üyeyim' : 'Üye Ol'}</T>
                </TouchableOpacity>}
        </View>
    );
});
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    appName: {
        marginBottom: '10%'
    },

    inputsContainer: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButton: {
        borderRadius: 10,
        width: '60%',
        marginTop: 20
    },
    submitButtonText: {
        color: 'white'
    },

    signInButton: {
        borderRadius: 10,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    signInButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        borderBottomWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 2,
        marginLeft: 5
    }
});

export { Splash };