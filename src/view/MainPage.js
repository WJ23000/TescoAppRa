/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TabBar from '../components/TabBar';

export default class MainScene extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});