/**
 * Created by wj on 20/07/03.
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from '../view/HomePage';
import ClassPage from '../view/ClassPage';
import CartPage from '../view/CartPage';
import MinePage from '../view/MinePage';
import px2dp from '../utils/px2dp';


export default class TabBar extends Component{
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabName: ['首页','分类','购物车','我的']
        }
    }

    render(){
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabbar}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[0]}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomePage navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[1]}
                    selected={this.state.selectedTab === 'compass'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.compassNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.compassSelected} />}
                    onPress={() => this.setState({ selectedTab: 'compass' })}>
                    {<ClassPage />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[2]}
                    selected={this.state.selectedTab === 'notification'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.notificationNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.notificationSelected} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    {<CartPage navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[3]}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.meNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.meSelected} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    {<MinePage navigator={this.props.navigator}/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;
        Icon.getImageSource('md-notifications', 50, normalColor).then((source) => this.setState({ notificationNormal: source }));
        Icon.getImageSource('md-notifications', 50, selectedColor).then((source) => this.setState({ notificationSelected: source }));
        Icon.getImageSource('md-home', 50, normalColor).then((source) => this.setState({ homeNormal: source }));
        Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({ homeSelected: source }));
        Icon.getImageSource('md-person', 50, normalColor).then((source) => this.setState({ meNormal: source }));
        Icon.getImageSource('md-person', 50, selectedColor).then((source) => this.setState({ meSelected: source }));
        Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({ compassNormal: source }));
        Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({ compassSelected: source }));
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