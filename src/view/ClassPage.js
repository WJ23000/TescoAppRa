/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Alert, AlertIOS } from 'react-native';
import theme from '../config/theme';


export default class ClassPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>分类</Text>
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
