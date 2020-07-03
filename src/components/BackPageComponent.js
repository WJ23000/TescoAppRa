/**
 * Created by wj on 20/07/03.
 */
import React, { Component } from 'react';
import { BackHandler, StyleSheet } from 'react-native';

export default class BackPageComponent extends Component{
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(49),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle:{
        padding: px2dp(8)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});