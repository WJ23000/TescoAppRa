/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import MainPage from './src/view/MainPage';
import SplashScreen from './src/native_modules/SplashScreen';

export default class Navigation extends Component{

    render(){
        return(
            <Navigator
                nitialRoute={{component: MainPage}}
                renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }

    // componentDidMount(){
    //     if(Platform.OS === 'android')
    //         SplashScreen.hide();
    // }
}