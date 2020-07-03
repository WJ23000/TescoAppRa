/**
 * Created by wj on 20/07/03.
 */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PageComponent from '../components/BackPageComponent';

export default class WebViewPage extends PageComponent{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Text>webview</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});