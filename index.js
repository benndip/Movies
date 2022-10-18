/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const MainApp = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MainApp);