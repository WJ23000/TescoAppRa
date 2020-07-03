/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Alert, AlertIOS } from 'react-native';
import theme from '../config/theme';
import SettingPage from './SettingPage';

export default class MinePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    _onPressCallback(position){
       switch(position){
           case 0: 
                this._alert();
                break;
           case 1: 
                this._alert();
                break;
           case 2: 
                this._alert();
                break;
           case 3: 
                this._alert();
                break;
           case 4: 
                this._alert();
                break;
           case 5:
                this._alert();
                break;
           case 6: { 
                this.props.navigator.push({
                    component: SettingPage
                });
                break;
           }
       }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>个人中心</Text>
            </View>
        );
    }

    _alert(){
        if(Platform.OS === 'android') {
            Alert.alert(
                'Message',
                "This function currently isn't available",
                [{text: 'OK', onPress: () => {}}]
            );
        }else if(Platform.OS === 'ios'){
            AlertIOS.alert(
                'Message',
                "This function currently isn't available",
                [{text: 'OK', onPress: () => {}}]
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    }
});