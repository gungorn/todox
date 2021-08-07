import { StyleSheet } from "react-native";
import { COLOR } from "~/utils/theme";

export const stylesForLogin = StyleSheet.create({
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        paddingHorizontal: 10
    },

    passwordInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        marginTop: 10,
        paddingHorizontal: 10
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
        marginTop: 10
    },
    signInButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        borderBottomWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 2
    }
});

export const stylesForSignIn = StyleSheet.create({
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    nameInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        paddingHorizontal: 10
    },

    emailInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderRadius: 3,
        paddingHorizontal: 10,
        marginTop: 10,
    },

    passwordInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderRadius: 3,
        marginTop: 10,
        paddingHorizontal: 10
    },
    passwordInput2: {
        width: '80%',
        borderWidth: 1,
        borderColor: COLOR('blue'),
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        marginTop: 10,
        paddingHorizontal: 10
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
        flexDirection:'row'
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
