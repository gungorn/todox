import { AppRegistry, Platform, UIManager } from 'react-native';
import { App as X } from '~/App';

//! sadece android için
if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('todox', () => X);
