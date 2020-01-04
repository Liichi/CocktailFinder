import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';

//Searchbar
import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchBar extends React.Component {
    render() {
        return (
            <View style={sbStyle.sbar}>
                <Icon style={sbStyle.sicon} name="ios-search" color="#ccc" size={25} />
                <TextInput style={sbStyle.sbar} placeholder='Search'></TextInput>
            </View>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <View style={sbStyle.header}>
                <SearchBar/>
                <Text style={sbStyle.cc}>Cancel</Text>
            </View>
        );
    }
}

const sbStyle = StyleSheet.create({
    header: {
        flex:1,
        minWidth: '90%',
        marginLeft: 30,
        marginRight: 30,
        height: 10,
        maxHeight: 40,
        flexDirection: 'row',
        //backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sbar: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    sicon: {
        marginLeft: 10,
        marginRight: 10
    },
    cc: {
        color: 'red',
        marginLeft: 10
    }
});

class SearchScreen extends React.Component<Props>{
    static navigationOptions = {
        headerShown: false
    };

    render(){
        return (
            <View style={styles.home}>
                <Header/>
            </View>
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