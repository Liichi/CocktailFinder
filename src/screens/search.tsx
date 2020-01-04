import React,{useState, useCallback,Component} from 'react';
import {View,SafeAreaView,Text,StyleSheet,Button} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import Header from '../components/header';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchScreen extends React.Component<Props>{
    static navigationOptions = {
        headerShown: false
    };

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.home}>
                    <Text>body</Text>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchScreen;