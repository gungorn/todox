import { AppRegistry, Platform, UIManager } from 'react-native';
import { App as X } from '~/App';
import { LOGIN } from '~/request/restful';

//! sadece android için
if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);


global.BASEURL = 'https://backendfood.herokuapp.com';
global.TOKENTYPE = 'Bearer';

const x = async () => {
    const data = await LOGIN({ email: 'test@gmail.com', password: '123456' });
    console.log(data);
};

x();


AppRegistry.registerComponent('todox', () => X);
