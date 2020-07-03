/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../config/theme';

export default class CartPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>购物车</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    }
});